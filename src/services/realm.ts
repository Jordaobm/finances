import Realm from "realm";

import CategorySchema from "../schemas/CategorySchema";
import CardSchema from "../schemas/CardSchema";
import OperationSchema from "../schemas/OperationSchema";
import ConfigurationSchema from "../schemas/ConfigurationSchema";
import { Card, Category, Config, Operation } from "../types";
import { newDateToMonthAndYear } from "../utils/newDateToMonthAndYear";
import { format, lastDayOfMonth, startOfMonth } from "date-fns";
import { dateToString, stringToDate } from "../utils/formatDate";

export default function getRealm() {
  return Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });
}

export async function getCategories() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  const data = realm.objects("Category");

  const categories: Category[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    const operations = await getOperationsByCategory({
      color: value?.color,
      id: value?.id,
      name: value?.name,
      number: value?.number,
    });

    let accumuledValue = 0;
    operations?.forEach((e) => {
      accumuledValue = accumuledValue + Number(e?.value);
    });

    categories.push({
      color: value?.color,
      id: value?.id,
      name: value?.name,
      number: value?.number,
      accumuledValue,
    });
  }

  return categories;
}

export async function getCards() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
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

export async function getConfiguration() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  const data = realm.objects("Configuration").filtered("id= $0", "1");

  const config: Config[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    config.push({
      id: value?.id,
      monthYear: value?.monthYear,
      firstDayMonth: value?.firstDayMonth,
      lastDayMonth: value?.lastDayMonth,
    });
  }

  if (!config[0]?.id) {
    const firstDayMonth = format(startOfMonth(new Date()), "dd/MM/yyyy");
    const lastDayMonth = format(lastDayOfMonth(new Date()), "dd/MM/yyyy");

    const monthYear = newDateToMonthAndYear(new Date());

    const initialConfig: Config = {
      id: "1",
      monthYear,
      firstDayMonth,
      lastDayMonth,
    };

    realm.write(() => {
      realm.create("Configuration", initialConfig, "modified");
    });

    return initialConfig;
  } else {
    return config[0];
  }
}

export async function updateConfigRealm(config: Config) {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  const collection = realm.objects("Configuration").filtered("id= $0", `1`);
  realm.write(() => {
    realm.delete(collection);
  });

  realm.write(() => {
    realm.create("Configuration", { ...config, id: "1" }, "modified");
  });

  return config;
}

export async function getCarteira() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
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

export async function addOrExcludeOperationAndUpdateCard(
  operation: Operation,
  exclude: Boolean
) {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  let updt: any = realm
    .objects("Card")
    .filtered("id= $0", `${operation?.card?.id}`);
  if (operation?.type === "INPUT") {
    realm.write(() => {
      updt[0].currentValue =
        Number(updt[0]?.currentValue) + Number(operation?.value);
    });
  } else if (operation?.type === "OUTPUT") {
    realm.write(() => {
      updt[0].currentValue =
        Number(updt[0]?.currentValue) - Number(operation?.value);
    });
  }

  if (!exclude) {
    const formatOperation = {
      ...operation,
      id: new Date().getTime().toString(),
      id_category: operation?.category?.id,
      id_card: operation?.card?.id,
    };

    realm.write(() => {
      realm.create(
        "Operation",
        { ...formatOperation, date: stringToDate(formatOperation?.date) },
        "modified"
      );
    });
  } else {
    const collection = realm
      .objects("Operation")
      .filtered("id= $0", `${operation?.id}`);
    realm.write(() => {
      realm.delete(collection);
    });
  }
}

export async function getCategory(idCategory: string) {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  const data = realm.objects("Category").filtered("id= $0", `${idCategory}`);

  const categories: Category[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    const operations = await getOperationsByCategory({
      color: value?.color,
      id: value?.id,
      name: value?.name,
      number: value?.number,
    });

    let accumuledValue = 0;
    operations?.forEach((e) => {
      accumuledValue = accumuledValue + Number(e?.value);
    });

    categories.push({
      color: value?.color,
      id: value?.id,
      name: value?.name,
      number: value?.number,
      accumuledValue,
    });
  }

  return categories[0];
}

export async function getCard(idCard: string) {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
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

export async function getOperations() {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  const config = await getConfiguration();
  let data;
  if (config) {
    data = realm
      .objects("Operation")
      .filtered(
        "date >= $0 && date <= $1",
        stringToDate(config.firstDayMonth),
        stringToDate(config.lastDayMonth)
      );
  } else {
    data = realm.objects("Operation");
  }

  const operations: Operation[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    operations.push({
      id: value?.id,
      date: dateToString(value?.date),
      name: value?.name,
      type: value?.type,
      value: value?.value,
      category: await getCategory(value?.id_category),
      card: await getCard(value?.id_card),
    });
  }

  return operations;
}

export async function getOperationsByCategory(category: Category) {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  const config = await getConfiguration();
  let data;
  if (config) {
    data = realm
      .objects("Operation")
      .filtered("id_category= $0", `${category?.id}`)
      .filtered(
        "date >= $0 && date <= $1",
        stringToDate(config.firstDayMonth),
        stringToDate(config.lastDayMonth)
      );
  } else {
    data = realm
      .objects("Operation")
      .filtered("id_category= $0", `${category?.id}`);
  }

  const operations: Operation[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    operations.push({
      id: value?.id,
      date: dateToString(value?.date),
      name: value?.name,
      type: value?.type,
      value: value?.value,
      category,
      card: await getCard(value?.id_card),
    });
  }

  return operations;
}

export async function getOperationForFilter(filter: {
  initialDate: string;
  finishDate: string;
}) {
  const realm = await Realm.open({
    path: "mydb",
    schema: [CategorySchema, CardSchema, OperationSchema, ConfigurationSchema],
  });

  const data = realm
    .objects("Operation")
    .filtered(
      "date >= $0 && date <= $1",
      stringToDate(filter.initialDate),
      stringToDate(filter.finishDate)
    );

  const operations: Operation[] = [];

  for (let i = 0; i < data.length; i++) {
    const value: any = data[i];

    operations.push({
      id: value?.id,
      date: dateToString(value?.date),
      name: value?.name,
      type: value?.type,
      value: value?.value,
      category: await getCategory(value?.id_category),
      card: await getCard(value?.id_card),
    });
  }

  return operations;
}
