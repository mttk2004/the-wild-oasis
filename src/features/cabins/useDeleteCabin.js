/**
 *  Project: the-wild-oasis
 *  File: useDeleteCabin.js
 *  Created: 8:08 SA, 02/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useMutation, useQueryClient }   from '@tanstack/react-query';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins.js';
import toast                             from 'react-hot-toast';


export default function useDeleteCabin() {
	const queryClient = useQueryClient();
	const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
																																			 mutationFn: deleteCabinApi,
																																			 onSuccess : async () => {
																																				 toast.success(
																																						 'Cabin successfully'
																																						 + ' deleted!');
																																				 await queryClient.invalidateQueries(
																																						 {
																																							 queryKey: ['cabins'],
																																						 });
																																			 },
																																			 onError   : error => toast.error(
																																					 error)
																																		 });
	
	return { isDeleting, deleteCabin };
}
