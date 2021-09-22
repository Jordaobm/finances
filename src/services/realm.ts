import Realm from "realm";

import CategorySchema from "../schemas/CategorySchema";
import { Category } from "../types";

export default function getRealm() {
  return Realm.open({
    path: "mydb",
    schema: [CategorySchema],
  });
}

export async function getCategories() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema],
  });

  const data = realm.objects("Category");

  const categories: Category[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    categories.push({
      color: value?.color,
      id: value?.id,
      name: value?.name,
      number: value?.number,
    });
  }

  return categories;
}
