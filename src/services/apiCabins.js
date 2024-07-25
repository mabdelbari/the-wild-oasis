import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins could not be loaded");

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // Preparing data
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "-"
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create / Edit Cabin
  let query = supabase.from("cabins");

  // A) Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) Edit Cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select();

  if (error)
    throw new Error(
      `${!id ? "Cabin could not be created" : "Cabin could not be edited"}`
    );

  // Uploading image
  if (hasImagePath) return data;

  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", data.at(0).id);
    throw new Error(
      "Cabin image couldn't be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Cabin could not be deleted");
}
