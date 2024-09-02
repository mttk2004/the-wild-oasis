/**
 *  Project: the-wild-oasis
 *  File: useUpdateSetting.js
 *  Created: 11:28 SA, 02/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useMutation, useQueryClient }       from '@tanstack/react-query';
import toast                                 from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings.js';


export default function useUpdateSetting() {
	const queryClient = useQueryClient();
	const { isPending: isUpdating, mutate: updateSetting } =
						useMutation({
													mutationFn: (newSettingData) => updateSettingApi(newSettingData),
													onSuccess : async () => {
														await queryClient.invalidateQueries({ queryKey: ['setting'] });
														toast.success('Setting successfully updated');
													},
													onError   : (error) => {
														toast.error(error.message);
														console.log(error);
													},
												});
	
	return { isUpdating, updateSetting };
}
