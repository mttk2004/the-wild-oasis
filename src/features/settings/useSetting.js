/**
 *  Project: the-wild-oasis
 *  File: useSettings.js
 *  Created: 10:30 SA, 02/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useQuery }   from '@tanstack/react-query';
import { getSetting } from '../../services/apiSettings.js';


export default function useSetting() {
	const { isLoading, data: settings, error } = useQuery({
																													queryKey: ['setting'],
																													queryFn : getSetting
																												});
	
	return { isLoading, settings, error };
}
