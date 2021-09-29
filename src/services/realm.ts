import Realm from "realm";

import CategorySchema from "../schemas/CategorySchema";
import CardSchema from "../schemas/CardSchema";
import OperationSchema from "../schemas/OperationSchema";
import { Card, Category, Operation } from "../types";

export default function getRealm() {
  return Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema],
  });
}

export async function getCategories() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema],
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
    schema: [CategorySchema, CardSchema, OperationSchema],
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

  return cards.filter((item) => item?.id !== "1");
}

export async function getCarteira() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema],
  });

  const data = realm.objects("Card").filtered("id= $0", "1");

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

  if (!cards[0]?.id) {
    const initialCard = {
      id: "1",
      colorBackground: "rgba(0, 0, 0, 0)",
      colorBackgroundNumber: 0,
      colorText: "#ffffff",
      colorTextNumber: 0,
      currentValue: 0,
      institutionName: "",
      name: "Carteira",
    };

    realm.write(() => {
      realm.create("Card", initialCard, "modified");
    });

    return initialCard;
  } else {
    return cards[0];
  }
}

export async function updateCard(operation: Operation) {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema],
  });

  let updt = realm.objects("Card").filtered("id= $0", `${operation?.card?.id}`);
  if (operation?.type === "INPUT") {
    realm.write(() => {
      updt[0].currentValue = updt[0].currentValue + operation?.value;
    });
  } else if (operation?.type === "OUTPUT") {
    realm.write(() => {
      updt[0].currentValue = updt[0].currentValue - operation?.value;
    });
  }

  const formatOperation = {
    ...operation,
    id: new Date().getTime().toString(),
    id_category: operation?.category?.id,
    id_card: operation?.card?.id,
  };

  realm.write(() => {
    realm.create("Operation", formatOperation, "modified");
  });
}

export async function getCategory(idCategory:string){
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema],
  });

  const data = realm.objects("Category").filtered("id= $0", `${idCategory}`);

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


  return categories[0];

}

export async function getCard(idCard:string){
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema],
  });

  const data = realm.objects("Card").filtered("id= $0", `${idCard}`);

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


  return cards[0];
} 

export async function getOperations(){

  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema],
  });

  const data = realm.objects("Operation");

  const operations: Operation[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    operations.push({
      id:value?.id,
      date:value?.date,
      name:value?.name,
      type:value?.type,
      value:value?.value,
      category:await getCategory(value?.id_category),
      card: await getCard(value?.id_card)
    });
  }

  return operations;

}