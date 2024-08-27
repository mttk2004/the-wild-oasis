/**
 *  Project: the-wild-oasis
 *  File: apiCabins.js
 *  Created: 10:55 SA, 27/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import supabase from './supabase.js';


async function getCabins() {
	const { data, error } = await supabase
			.from('cabin')
			.select('*');
	
	if (error) {
		console.error(error);
		throw Error('Cabins could not be loaded');
	}
	
	return data;
}

async function deleteCabin(id) {
	const { data, error } = await supabase
			.from('cabin')
			.delete()
			.eq('id', id)
	
	if (error) {
		console.error(error);
		throw Error('Cabin could not be deleted');
	}
	
	return data;
}

export { getCabins, deleteCabin }
