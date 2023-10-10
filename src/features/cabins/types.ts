export type CabinForm = {
  description: string;
  name: string;
  //eslint-disable-next-line
  image?: any;
  discount: number;
  regularPrice: number;
  maxCapacity: number;
  id?: number;
  imageUrl?: string;
  type?: 'Edit' | 'Insert' | 'Copy';
};
export type CabinFormField =
  | 'description'
  | 'name'
  | 'imageUrl'
  | 'discount'
  | 'regularPrice'
  | 'maxCapacity';
export type CabinType = {
  created_at: string;
  description: string | null;
  discount: number | null;
  id: number;
  imageUrl: string | null;
  maxCapacity: number | null;
  name: string | null;
  regularPrice: number | null;
} | null;
