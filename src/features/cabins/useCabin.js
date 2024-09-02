/**
 *  Project: the-wild-oasis
 *  File: useCabin.js
 *  Created: 9:51 SA, 02/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useQuery }  from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins.js';


export default function useCabin() {
	const { data: cabins, error, isLoading } = useQuery({
																												queryKey: ['cabins'],
																												queryFn : getCabins
																											});

	return { cabins, error, isLoading };
}
