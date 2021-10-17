import { PermissionsAndroid } from "react-native";
import RNFS from "react-native-fs";
import {
  getCards,
  getCategories,
  getConfiguration,
  getOperations,
} from "./realm";

export async function exportData() {
  const date = new Date();

  const path =
    RNFS.ExternalStorageDirectoryPath +
    `/Download/financesDB${date.getTime()}-${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}.json`;

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
      const cards = await getCards().then((data) => data);
      const categories = await getCategories().then((data) => data);
      const configurations = await getConfiguration().then((data) => data);
      const operations = await getOperations().then((data) => data);

      const data = {
        cards,
        categories,
        configurations,
        operations,
      };
      const result = await RNFS.writeFile(path, JSON.stringify(data))
        .then((success) => {
          return true;
        })
        .catch((err) => {
          return false;
        });

      return result;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}
