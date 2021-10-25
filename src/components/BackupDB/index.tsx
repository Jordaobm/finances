import { useNavigation } from "@react-navigation/native";
import React from "react";
import { CheckIcon, RefreshIcon } from "../../icons/Icons";
import {
  CloseAndReturn,
  CloseAndReturnText,
  Container,
  ContainerRefreshIcon,
  Progress,
  TextDescription,
  TitleTask,
} from "./styles";
interface BackupDB {
  loadingDataDB: number;
  loadingDataAPP: number;
  setBackupDB: (value: boolean) => void;
  setStatusLoadingDataForDB: (value: number) => void;
  setStatusLoadingDataForApp: (value: number) => void;
}

export const BackupDB = ({
  loadingDataAPP,
  loadingDataDB,
  setBackupDB,
  setStatusLoadingDataForApp,
  setStatusLoadingDataForDB,
}: BackupDB) => {
  const navigation = useNavigation();

  return (
    <Container
      style={{
        padding: 32,
        backgroundColor: `${
          loadingDataAPP < 100 ? "rgba(1, 55, 148, 0.8)" : "#3CC75E"
        }`,
      }}
    >
      <ContainerRefreshIcon>
        {loadingDataAPP === 100 ? (
          <CheckIcon color="#fff" />
        ) : (
          <RefreshIcon color="#fff" />
        )}
      </ContainerRefreshIcon>
      {loadingDataDB !== 100 && (
        <>
          <TitleTask>Importando dados para o banco</TitleTask>
          <TextDescription>
            Aguarde enquanto o finances trás todos os seus dados do seu arquivo
            de backup
          </TextDescription>
          <Progress>{loadingDataDB} %</Progress>
        </>
      )}

      {loadingDataDB === 100 && (
        <>
          <TitleTask>
            {loadingDataAPP === 100
              ? "Restauração concluída"
              : "Atualizando informações"}
          </TitleTask>
          <TextDescription>
            {loadingDataAPP === 100
              ? "Seus dados foram restaurados com sucesso! Você já pode usar o aplicativo normalmente"
              : "E por fim, finances está sendo atualizado com as novas informações das suas operações"}
          </TextDescription>
          <Progress>{loadingDataAPP} %</Progress>

          {loadingDataAPP === 100 && (
            <CloseAndReturn
              testID="closeAndReturn"
              onPress={() => {
                setStatusLoadingDataForDB(0);
                setStatusLoadingDataForApp(0);
                setBackupDB(false);
                navigation.navigate("Home");
              }}
            >
              <CloseAndReturnText>Voltar</CloseAndReturnText>
            </CloseAndReturn>
          )}
        </>
      )}
    </Container>
  );
};
