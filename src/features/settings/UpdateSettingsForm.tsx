import { ErrorMessage } from '../../components/ErrorMessage';
import Form from '../../components/Form';
import { FormRow } from '../../components/FormRow';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { useSettings } from '../../hooks/useSettings';
import Spinner from '../../ui/Spinner';
import { SettingsField, SettingsRow } from './types';
import { useEditSettings } from '../../hooks/useEditSettings';

function UpdateSettingsForm() {
  const {
    isLoading,
    error,
    settings = {
      minBookingLength: '',
      maxBookingLength: '',
      maxGuestsPerBooking: '',
      breakfastPrice: '',
    },
  } = useSettings();
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings as SettingsRow;
  const { mutate, isLoading: isEditing } = useEditSettings();
  async function handleUpdate(
    event: React.FocusEvent<HTMLInputElement, Element>,
    field: SettingsField
  ) {
    const value = Number(event.target.value);
    //eslint-disable-next-line
    const currentValue = (settings as SettingsRow)[field];
    if (!value || currentValue == value) {
      return;
    }
    mutate({ [field]: value });
  }
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorMessage>error</ErrorMessage>;
  }
  return (
    <Form>
      <FormRow>
        <Label>Minimum nights/booking</Label>
        <Input
          onBlur={(event) => handleUpdate(event, 'minBookingLength')}
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow>
        <Label>Maximum nights/booking</Label>
        <Input
          onBlur={(event) => handleUpdate(event, 'maxBookingLength')}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow>
        <Label>Maximum guests/booking</Label>
        <Input
          onBlur={(event) => handleUpdate(event, 'maxGuestsPerBooking')}
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isEditing}
        />
      </FormRow>
      <FormRow>
        <Label>Breakfast price</Label>
        <Input
          onBlur={(event) => handleUpdate(event, 'breakfastPrice')}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isEditing}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
