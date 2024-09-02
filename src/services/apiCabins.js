/**
 *  Project: the-wild-oasis
 *  File: apiCabins.js
 *  Created: 10:55 SA, 27/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import supabase, { supabaseUrl } from './supabase.js';


async function getCabins() {
	const { data, error } = await supabase
			.from('cabin')
			.select('*');
	
	if (error) {
		console.error(error);
		throw Error(error?.message ?? 'Cabins could not be loaded');
	}
	
	return data;
}

async function deleteCabin(id) {
	const { data, error } = await supabase
			.from('cabin')
			.delete()
			.eq('id', id);
	
	if (error) {
		console.error(error);
		throw Error(error?.message ?? 'Cabin could not be deleted');
	}
	
	return data;
}

async function createEditCabin(newCabin, id) {
	if (newCabin === undefined) return null;
	
	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl) ?? false;
	
	const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll('/', '');
	const imagePath = hasImagePath ? newCabin.image
																 : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	
	let query = supabase.from('cabin');
	
	// CREATE
	if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
	
	// UPDATE
	if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
	
	const { data, error } = await query.select().single();
	
	if (error) {
		console.error(error);
		throw Error(error?.message ?? 'Cabin could not be created/updated');
	}
	
	// If no update image, no need to upload image
	if (id && !hasImagePath) return;
	
	// 2. Upload image
	const { errorUpload } = await supabase
			.storage
			.from('cabin-images')
			.upload(imageName, newCabin.image);
	
	// 3. If there was an error uploading cabin, delete
	if (errorUpload) {
		console.log('error uploading image', errorUpload);
		await supabase
				.from('cabin')
				.delete()
				.eq('id', data.id);
	}
	
	return data;
}

export { getCabins, deleteCabin, createEditCabin };
