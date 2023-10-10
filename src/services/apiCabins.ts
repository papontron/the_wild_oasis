import { supabase } from '../config/supabase/supabse';

export async function getCabins() {
  const { error, data } = await supabase.from('cabins').select('*');
  if (error) {
    throw new Error('error fetching the cabins');
  }
  return data;
}
export async function deleteCabin(id: number) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    throw new Error('cabin couldnt be deleted: ');
  }
}
//eslint-disable-next-line
async function uploadCabinPhoto(imageName: string, image: any) {
  const { data, error: uploadImageError } = await supabase.storage
    .from('cabins-images')
    .upload(imageName, image, { upsert: true });
  if (uploadImageError) {
    throw new Error('error uploading the cabin image');
  }
  return data;
}

//eslint-disable-next-line
export async function insertOrEditCabin(cabin: any) {
  const id = cabin.id;
  const type = cabin.type;
  if (id) {
    if (type && type === 'Copy') {
      //eslint-disable-next-line

      await createCabin(cabin);
    } else {
      await editCabin(id, cabin);
    }
  }
  if (!id) {
    await createCabin(cabin);
  }

  //2- upload the image:
}
//eslint-disable-next-line
async function createCabin(cabin: any) {
  if (cabin.type && cabin.type === 'Copy') {
    //eslint-disable-next-line
    const { type, id, created_at, ...rest } = cabin;
    const { error: createCabinError } = await supabase
      .from('cabins')
      .insert([rest])
      .select();
    if (createCabinError) {
      throw new Error('cabin couldnt be inserted');
    }
  } else {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const imageName = cabin.name.replaceAll('/', '').replaceAll(' ', '-');
    await uploadCabinPhoto(imageName, cabin.image);
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

    const newCabin = { ...cabin, imageUrl };
    delete newCabin.image;

    //create the cabin:
    //if u append .select().single() at the end of the supabase query, it will return the newly created data
    const { error: createCabinError } = await supabase
      .from('cabins')
      .insert([newCabin])
      .select();
    if (createCabinError) {
      //delete the photo
      supabase.storage.from('cabins-images').remove([imageName]);
      throw new Error('cabin couldnt be inserted');
    }
  }
}
//eslint-disable-next-line
async function editCabin(id: number, data: any) {
  //need validate types : CabinForm
  const newImage = data.image || false;
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const imageName = data.name.replaceAll('/', '').replaceAll(' ', '-');
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  if (newImage) {
    //upload new photo
    //eslint-disable-next-line
    const { image, created_at, ...restData } = data;
    const editedCabin = { ...restData, imageUrl };
    await uploadCabinPhoto(imageName, newImage);
    const { error } = await supabase
      .from('cabins')
      .update(editedCabin)
      .eq('id', id)
      .select();
    if (error) {
      throw new Error('error editing the cabin');
    }
  }
  if (!newImage) {
    //eslint-disable-next-line
    const { image, created_at, ...restData } = data;
    const editedCabin = { ...restData };
    const { error } = await supabase
      .from('cabins')
      .update(editedCabin)
      .eq('id', id)
      .select();
    if (error) {
      console.log({ error });
      throw new Error('error editing the cabin');
    }
  }
}
