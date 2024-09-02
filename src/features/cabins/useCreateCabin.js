/**
 *  Project: the-wild-oasis
 *  File: useCreateCabin.js
 *  Created: 8:21 SA, 02/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin }             from '../../services/apiCabins.js';
import toast                           from 'react-hot-toast';


export default function useCreateCabin() {
	const queryClient = useQueryClient();
	const { isPending: isCreating, mutate: createCabin } =
						useMutation({
													mutationFn: createEditCabin,
													onSuccess : async () => {
														await queryClient.invalidateQueries(
																{ queryKey: ['cabins'] });
														toast.success(
																'Cabin successfully created');
													},
													onError   : (error) => {
														console.log(error);
														toast.error(
																error.message);
													},
												});
	
	return { isCreating, createCabin };
}
