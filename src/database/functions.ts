import { getCategories } from "../services/realm";

export async function getCategoriesByDB() {
  return getCategories();
}
