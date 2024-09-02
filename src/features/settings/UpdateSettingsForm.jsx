import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input      from '../../ui/Input';
import useSetting from './useSetting.js';
import useUpdateSetting from './useUpdateSetting.js';

function UpdateSettingsForm() {
  const { settings: { maxBookingLength, minBookingLength, maxGuestsPerBooking, breakfastPrice } = {}, error, isLoading } = useSetting();
  const { isUpdating, updateSetting } = useUpdateSetting();
  
  function handleBlur(event, field) {
    const { value } = event.target;
    updateSetting({ [field]: value });
  }
  
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={e => handleBlur(e, 'minBookingLength')} disabled={isUpdating} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={e => handleBlur(e, 'maxBookingLength')} disabled={isUpdating} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} onBlur={e => handleBlur(e, 'maxGuestsPerBooking')} disabled={isUpdating} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={e => handleBlur(e, 'breakfastPrice')} disabled={isUpdating} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
