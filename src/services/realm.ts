import Realm from "realm";

import CategorySchema from "../schemas/CategorySchema";
import CardSchema from "../schemas/CardSchema";
import { Card, Category } from "../types";

export default function getRealm() {
  return Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema],
  });
}

export async function getCategories() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema],
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

export async function getCards() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema],
  });

  const data = realm.objects("Card");

  const cards: Card[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    cards.push({
      id: value?.id,
      institutionName: value?.institutionName,
      colorBackground: value?.colorBackground,
      colorText: value?.colorText,
      currentValue: value?.currentValue,
      name: value?.name,
      colorBackgroundNumber: value?.colorBackgroundNumber,
      colorTextNumber: value?.colorTextNumber,
    });
  }

  return cards;
}
