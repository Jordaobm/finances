import { PermissionsAndroid } from "react-native";
import RNFS from "react-native-fs";

export async function deleteFile(path: string) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Permissões de armazenamento",
        message: "Permissão para salvar/editar/deletar arquivos",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Não",
        buttonPositive: "Sim",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await RNFS.unlink(path)
        .then(() => {
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
