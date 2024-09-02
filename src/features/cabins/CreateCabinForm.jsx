import Input          from '../../ui/Input';
import Form           from '../../ui/Form';
import Button         from '../../ui/Button';
import FileInput      from '../../ui/FileInput';
import Textarea       from '../../ui/Textarea';
import { useForm }    from 'react-hook-form';
import FormRow        from '../../ui/FormRow.jsx';
import useCreateCabin from './useCreateCabin.js';
import useUpdateCabin from './useUpdateCabin.js';


function CreateCabinForm({ cabinToEdit = {} }) {
	const { isCreating, createCabin } = useCreateCabin();
	const { isUpdating, updateCabin } = useUpdateCabin();
	const isWorking = isCreating || isUpdating;
	
	const { id: editId, ...editValues } = cabinToEdit;
	const isEditSession = Boolean(editId);
	
	const { register, handleSubmit, reset, getValues, formState: { errors } } =
						useForm({ defaultValues: isEditSession ? editValues : {} });
	
	function onSubmit(data) {
		const image = typeof data.image === 'string' ? data.image : data.image[0];
		console.log({ ...data, image });
		if (isEditSession) {
			updateCabin({ newCabinData: { ...data, image }, id: editId }, {
				onSuccess: () => reset(),
			});
		}
		else {
			createCabin({ ...data, image }, {
				onSuccess: () => reset(),
			});
		}
	}
	
	function onError(errors) {
		// console.log(errors);
	}
	
	return (
			<Form onSubmit={handleSubmit(onSubmit, onError)}>
				<FormRow label="Cabin name" error={errors?.name?.message}>
					<Input
							disabled={isWorking}
							type="text" id="name" {...register('name', {
						required: 'This field is required',
						validate: (name) => name.length > 1 || 'Name not long enough'
					})} />
				</FormRow>
				
				<FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
					<Input
							disabled={isWorking}
							type="number" id="maxCapacity" {...register('maxCapacity', {
						required: 'This field is required',
						min     : { value: 1, message: 'Min capacity is 1' },
						max     : { value: 12, message: 'Max capacity is 12' }
					})} />
				</FormRow>
				
				<FormRow label="Regular price" error={errors?.price?.message}>
					<Input
							disabled={isWorking}
							type="number" id="price" {...register('price', {
						required: 'This field is required',
						min     : {
							value  : 100,
							message: 'Min price is 100'
						},
					})} />
				</FormRow>
				
				<FormRow label="Discount" error={errors?.discount?.message}>
					<Input
							disabled={isWorking}
							type="number" id="discount" defaultValue={0} {...register('discount', {
						required: 'This field is required',
						validate: (discount) => +discount < +getValues('price') || 'Discount should be less'
																		+ ' than price'
					})} />
				</FormRow>
				
				<FormRow label="Description for website" error={errors?.description?.message}>
					<Textarea
							disabled={isWorking} type="number" id="description" defaultValue="" {...register(
							'description')} />
				</FormRow>
				
				<FormRow label="Cabin photo" error={errors?.image?.message}>
					<FileInput
							disabled={isWorking} id="image" accept="image/*" {...register(
							'image', {
								// required:  'This field is required',
							})} />
				</FormRow>
				
				<FormRow>
					{/* type is an HTML attribute! */}
					<Button $variation="secondary" type="reset" disabled={isWorking}>
						Cancel
					</Button>
					<Button disabled={isWorking}>Add cabin</Button>
				</FormRow>
			</Form>
	);
}

export default CreateCabinForm;
