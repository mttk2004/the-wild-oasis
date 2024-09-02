/**
 *  Project: the-wild-oasis
 *  File: useUpdateCabin.js
 *  Created: 8:48 SA, 02/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin }             from '../../services/apiCabins.js';
import toast                           from 'react-hot-toast';


export default function useUpdateCabin() {
	const queryClient = useQueryClient();
	const { isPending: isUpdating, mutate: updateCabin } =
						useMutation({
													mutationFn: ({ newCabinData, id }) => {
														console.log('newCabinData: ', newCabinData);
														console.log('id: ', id);
														return createEditCabin(newCabinData, id);
													},
													onSuccess : async () => {
														await queryClient.invalidateQueries({ queryKey: ['cabins'] });
														toast.success('Cabin successfully updated');
													},
													onError   : (error) => {
														toast.error(error.message);
														console.log(error);
													},
												});
	
	return { isUpdating, updateCabin };
}
