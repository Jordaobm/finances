import { PermissionsAndroid } from "react-native";
import RNFS from "react-native-fs";
import { File, Operation, OperationDB, RestoreDB } from "../types";
import { stringToDate } from "../utils/formatDate";
import { getLastOperation } from "../utils/getLastOperation";
import {
  clearDB,
  createCard,
  createCategory,
  createConfiguration,
  createOperation,
} from "./realm";

export async function readFiles() {
  let files: File[] = [];

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Permissão para salvar arquivos",
        message: "Permissão para salvar arquivos",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const path = RNFS.ExternalStorageDirectoryPath + `/Download`;

      const result = await RNFS.readDir(path)
        .then((data: any) => {
          data?.map((e: any) => {
            if (e?.name?.startsWith("financesDB")) {
              files.push({ name: e?.name, path: e?.path });
            }
          });
        })
        .catch((err) => {});

      return files;
    } else {
      return files;
    }
  } catch (err) {
    console.warn(err);
    return files;
  }
}

export async function readFileToDB(path: string, callbackLoading: any) {
  await clearDB();

  RNFS.readFile(path).then(async (res) => {
    const restoreDB: RestoreDB = JSON.parse(res);

    callbackLoading(0);
    restoreDB?.cards?.map(async (card) => {
      await createCard(card);
    });

    callbackLoading(25);
    restoreDB?.categories?.map(async (category) => {
      await createCategory(category);
    });

    callbackLoading(50);
    const cfg = restoreDB?.configurations;
    await createConfiguration({ id: "1", ...cfg });

    callbackLoading(75);

    restoreDB?.operations?.map(async (operation) => {
      const formattedOperation: OperationDB = {
        id: operation?.id,
        name: operation?.name,
        date: stringToDate(operation?.date),
        id_category: operation?.category?.id,
        type: operation?.type,
        value: operation?.value,
        id_card: operation?.card?.id,
        id_for: operation?.for?.id || "",
        id_origin: operation?.origin?.id || "",
      };

      await createOperation(formattedOperation);
    });
    callbackLoading(100);
  });
}

export async function readLastOperation(path: string) {
  const result = await RNFS.readFile(path).then(async (res) => {
    const restoreDB: RestoreDB = JSON.parse(res);

    if (restoreDB?.operations?.length !== 0) {
      return getLastOperation(restoreDB?.operations);
    }
  });

  return result;
}
