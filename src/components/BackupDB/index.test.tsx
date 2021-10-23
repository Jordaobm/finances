import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import renderer from "react-test-renderer";
import { BackupDB } from ".";

test("Component CustomAutocomplete", () => {
  let loadingDataAPP = 0;

  function setLoadingDataAPP(value: number) {
    loadingDataAPP = value;
  }

  let loadingDataDB = 0;

  function setLoadingDataDB(value: number) {
    loadingDataDB = value;
  }

  let backupDB = false;

  function setBackupDB(value: boolean) {
    return value;
  }

  const tree = renderer
    .create(
      <NavigationContainer>
        <BackupDB
          loadingDataAPP={0}
          loadingDataDB={10}
          setBackupDB={setBackupDB}
          setStatusLoadingDataForApp={setLoadingDataAPP}
          setStatusLoadingDataForDB={setLoadingDataDB}
        />
      </NavigationContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
