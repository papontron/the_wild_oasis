import Form from '../../components/Form';
import FileInput from '../../components/FileInput';
import Textarea from '../../ui/Textarea';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../utils/unknownError';
import { cabinMaxCapacity, cabinMinCapacity } from '../../utils/var';
import { FormRow } from '../../components/FormRow';
import { Label } from '../../components/Label';
import { ErrorMessage } from '../../components/ErrorMessage';
import { CabinForm } from './types';
import { useInsertOrEditCabin } from '../../hooks/useInsertOrEditCabin';
import { Overlay } from '../../components/overlay';
interface Props {
  onClose: () => void;
  type?: 'Edit' | 'Insert';
  data?: CabinForm;
}

function CreateCabinForm({ type = 'Insert', data, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<CabinForm>({ defaultValues: type === 'Edit' ? { ...data } : {} }); //register the inputs(by id) // const {formState} = useForm();

  const { isLoading, mutate } = useInsertOrEditCabin(type, onClose, reset);

  //returning JSX
  return (
    <>
      {type === 'Edit' && <Overlay />}
      <Form
        $modal={type === 'Edit' ? true : false}
        onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow>
          <Label htmlFor="name">Cabin name</Label>
          <Input
            disabled={isLoading}
            type="text"
            id="name"
            {...register('name', getFieldOptions().name)}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormRow>

        <FormRow>
          <Label htmlFor="maxCapacity">Maximum capacity</Label>
          <Input
            disabled={isLoading}
            type="number"
            id="maxCapacity"
            {...register('maxCapacity', getFieldOptions().maxCapacity)}
          />
          {errors.maxCapacity && (
            <ErrorMessage>{errors.maxCapacity.message}</ErrorMessage>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="regularPrice">Regular price</Label>
          <Input
            disabled={isLoading}
            type="number"
            id="regularPrice"
            {...register('regularPrice', getFieldOptions().regularPrice)}
          />
          {errors.regularPrice && (
            <ErrorMessage>{errors.regularPrice.message}</ErrorMessage>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="discount">Discount</Label>
          <Input
            disabled={isLoading}
            type="number"
            id="discount"
            defaultValue={0}
            {...register('discount', getFieldOptions().discount)}
          />
          {errors.discount && (
            <ErrorMessage>{errors.discount.message}</ErrorMessage>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="description">Description for website</Label>
          <Textarea
            disabled={isLoading}
            id="description"
            defaultValue=""
            {...register('description', getFieldOptions().description)}
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </FormRow>

        <FormRow>
          <Label htmlFor="image">Cabin photo</Label>
          <FileInput
            id="image"
            accept="image/*"
            {...register('image', {
              required: type === 'Edit' ? false : 'you must provide an image',
            })}
            disabled={isLoading}
          />
          {errors.image && (
            <ErrorMessage>{errors.image.message as string}</ErrorMessage>
          )}
        </FormRow>

        <FormRow>
          {/* type is an HTML attribute!, clears the form's inputs */}
          <Button
            type="reset"
            $danger
            $small
            disabled={isLoading}
            onClick={onClose}>
            Cancel
          </Button>
          <Button $small $primary disabled={isLoading}>
            {type} cabin
          </Button>
        </FormRow>
      </Form>
    </>
  );
  function onSubmit(data: CabinForm) {
    mutate({ ...data, image: data.image[0] ?? null });
  }
  //eslint-disable-next-line
  function onError(error: any) {
    toast.error(getErrorMessage(error));
  }
  function getFieldOptions() {
    return {
      name: {
        required: 'name is required',
        minLength: {
          value: 6,
          message: 'a cabins name must be at least 6 characters',
        },
        maxLength: {
          value: 50,
          message: 'a cabins name cant be larger than 50 characters',
        },
      },
      maxCapacity: {
        required: 'max capacity is required',
        min: {
          value: cabinMinCapacity,
          message: 'min value for max capacity is 2',
        },
        max: {
          value: cabinMaxCapacity,
          message: 'max value for max capacity is 10',
        },
      },
      regularPrice: {
        required: 'regular price is required',

        validate: (value: number) => {
          return value >= 50 || 'regular price cant be lower than 50';
        },
      },
      discount: {
        required: 'discount required',
        //eslint-disable-next-line
        validate: (discount: number) => {
          const maxDiscount = getValues().regularPrice * 0.2;
          return (
            (discount < maxDiscount && discount > 0) ||
            'the discount cant be higher than the 20% of the regular price'
          );
        },
      },
      description: {
        required: 'insert a description for the cabin',
        minLength: {
          value: 20,
          message: 'description must be at least 20 chars lenght',
        },
        maxLength: {
          value: 100,
          message: 'description cant be larger than 100 chars',
        },
      },
    };
  }
}

export default CreateCabinForm;
