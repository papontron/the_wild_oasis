export type SettingsRow = {
  breakfastPrice: number;
  id: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  minBookingLength: number;
};

export type SettingsField =
  | 'breakfastPrice'
  | 'id'
  | 'maxBookingLength'
  | 'maxGuestsPerBooking'
  | 'minBookingLength';
