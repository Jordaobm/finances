import { useNavigation } from "@react-navigation/core";
import { format, lastDayOfMonth, startOfMonth } from "date-fns";
import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import pck from "../../../package.json";
import db from "../../assets/db.jpg";
import { BackupDB } from "../../components/BackupDB";
import { Input } from "../../components/Input";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { ArrowLeftIcon, BackupIcon } from "../../icons/Icons";
import { exportData } from "../../services/exportFile";
import { readFiles, readFileToDB } from "../../services/importFile";
import { Config, File } from "../../types";
import { dateToStringWithHour } from "../../utils/formatDate";
import { monthAndYearToDate } from "../../utils/monthAndYearToDate";
import {
  AcceptText,
  Action,
  Actions,
  CancelText,
  CategoriesImage,
  Container,
  ContainerAction,
  ContainerFilesDB,
  ContainerImage,
  ContainerInput,
  ExportData,
  ExportDataText,
  FileDB,
  FileDBData,
  FileDBPath,
  FileDBText,
  FormContainer,
  GoBack,
  Icone,
  ImportData,
  ImportDataText,
  SubtitlePage,
  TitlePage,
  Version,
} from "./styles";

export const Configuration = () => {
  const navigation = useNavigation();

  const { config, updateConfig, reloadValues } = useUpdateDataContext();

  const [form, setForm] = useState<Config>(config);
  const [files, setFiles] = useState<File[]>([]);
  const [statusLoadingDataForDB, setStatusLoadingDataForDB] = useState(0);
  const [statusLoadingDataForApp, setStatusLoadingDataForApp] = useState(0);

  const [backupDB, setBackupDB] = useState(false);

  const loadingDataForDB = (value: number) => {
    setStatusLoadingDataForDB(value);
  };

  const reloadValuesForApp = (value: number) => {
    setStatusLoadingDataForApp(value);
  };

  useEffect(() => {
    if (statusLoadingDataForDB === 100) {
      reloadValues(reloadValuesForApp);
    }
  }, [statusLoadingDataForDB]);

  if (backupDB) {
    return (
      <BackupDB
        loadingDataDB={statusLoadingDataForDB}
        loadingDataAPP={statusLoadingDataForApp}
        setBackupDB={setBackupDB}
        setStatusLoadingDataForDB={setStatusLoadingDataForDB}
        setStatusLoadingDataForApp={setStatusLoadingDataForApp}
      />
    );
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(1, 55, 148, 0.0)"
        translucent
        hidden
      />
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <Container>
          <GoBack
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeftIcon color="#595959" />
          </GoBack>
          <TitlePage>Configurações</TitlePage>
          <SubtitlePage>
            Nas configurações você poderá escolher qual mês deseja mostrar
          </SubtitlePage>

          <FormContainer>
            <ContainerInput>
              <Input
                maskMonth
                placeholder="Mês e ano"
                onChangeText={(monthYear) => {
                  if (monthYear?.length === 7) {
                    const firstDayMonth = format(
                      startOfMonth(monthAndYearToDate(monthYear)),
                      "dd/MM/yyyy"
                    );
                    const lastDayMonth = format(
                      lastDayOfMonth(monthAndYearToDate(monthYear)),
                      "dd/MM/yyyy"
                    );
                    setForm((state) => ({
                      ...state,
                      monthYear,
                      firstDayMonth,
                      lastDayMonth,
                    }));
                  }
                }}
                value={form?.monthYear}
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                maskDate
                placeholder="Primeiro dia do período"
                onChangeText={(firstDayMonth) =>
                  setForm((state) => ({ ...state, firstDayMonth }))
                }
                value={form?.firstDayMonth}
              />
            </ContainerInput>

            <ContainerInput>
              <Input
                maskDate
                placeholder="Ultimo dia do período"
                onChangeText={(lastDayMonth) =>
                  setForm((state) => ({ ...state, lastDayMonth }))
                }
                value={form?.lastDayMonth}
              />
            </ContainerInput>
          </FormContainer>
          <Version>Versão {pck?.version}</Version>

          <TitlePage style={{ marginTop: 32 }}>Meus dados</TitlePage>
          <SubtitlePage>
            Seus dados ficam salvos localmente em seu dispositivo, no entanto
            você pode exportá-los para um arquivo externo ou então importar um
            arquivo de dados.
          </SubtitlePage>

          <ContainerImage>
            <CategoriesImage source={db} />
          </ContainerImage>

          <ContainerAction>
            <ImportData
              onPress={async () => {
                const receivedFiles = await readFiles();
                setFiles(receivedFiles);
              }}
            >
              <ImportDataText>Importar dados</ImportDataText>
            </ImportData>

            <ExportData
              onPress={async () => {
                const result = await exportData();

                if (result) {
                  Toast.show({
                    type: "success",
                    text1: "Backup criado com sucesso",
                    text2: `O backup foi criado e pode ser acesso em /Android/data/`,
                    autoHide: true,
                  });
                } else {
                  Toast.show({
                    type: "error",
                    text1: "Ocorreu um erro",
                    text2: `Ocorreu um erro ao criar o backup`,
                    autoHide: true,
                  });
                }
              }}
            >
              <ExportDataText>Exportar dados</ExportDataText>
            </ExportData>
          </ContainerAction>

          {files?.length > 0 && (
            <ContainerFilesDB>
              {files?.map((file) => {
                return (
                  <FileDB
                    key={file?.name}
                    onPress={async () => {
                      setBackupDB(true);
                      readFileToDB(file?.path, loadingDataForDB);
                    }}
                  >
                    <FileDBText>Backup</FileDBText>
                    <FileDBData>
                      {dateToStringWithHour(
                        new Date(
                          Number(file?.name?.split("B")[1]?.split("-")[0])
                        )
                      )}
                    </FileDBData>
                    <FileDBPath>{file?.path}</FileDBPath>

                    <Icone>
                      <BackupIcon color="#3CC75E" />
                    </Icone>
                  </FileDB>
                );
              })}
            </ContainerFilesDB>
          )}
        </Container>
      </ScrollView>
      <Actions>
        <Action
          onPress={() => {
            navigation.goBack();
          }}
        >
          <CancelText>Voltar</CancelText>
        </Action>
        <Action
          onPress={async () => {
            await updateConfig({ ...form });
            navigation.goBack();
          }}
        >
          <AcceptText>Salvar</AcceptText>
        </Action>
      </Actions>
    </>
  );
};
