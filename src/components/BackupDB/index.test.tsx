import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { BackupDB } from ".";
import renderer, { act } from "react-test-renderer";

import { render, fireEvent } from "@testing-library/react-native";

test("Component BackupDB load data", async () => {
  let loadingDataAPP = 0;

  function setLoadingDataAPP(value: number) {
    loadingDataAPP = value;
  }

  let loadingDataDB = 0;

  function setLoadingDataDB(value: number) {
    loadingDataDB = value;
  }

  function setBackupDB(value: boolean) {
    return value;
  }

  const tree = renderer
    .create(
      <NavigationContainer>
        <BackupDB
          loadingDataAPP={loadingDataDB}
          loadingDataDB={loadingDataDB}
          setBackupDB={setBackupDB}
          setStatusLoadingDataForApp={setLoadingDataAPP}
          setStatusLoadingDataForDB={setLoadingDataDB}
        />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});

test("Component BackupDB load APP complete", async () => {
  let loadingDataAPP = 100;

  function setLoadingDataAPP(value: number) {
    loadingDataAPP = value;
  }

  let loadingDataDB = 10;

  function setLoadingDataDB(value: number) {
    loadingDataDB = value;
  }

  function setBackupDB(value: boolean) {
    return value;
  }

  const tree = renderer
    .create(
      <NavigationContainer>
        <BackupDB
          loadingDataAPP={loadingDataAPP}
          loadingDataDB={loadingDataDB}
          setBackupDB={setBackupDB}
          setStatusLoadingDataForApp={setLoadingDataAPP}
          setStatusLoadingDataForDB={setLoadingDataDB}
        />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});

test("Component BackupDB load DB complete", async () => {
  let loadingDataAPP = 100;

  function setLoadingDataAPP(value: number) {
    loadingDataAPP = value;
  }

  let loadingDataDB = 100;

  function setLoadingDataDB(value: number) {
    loadingDataDB = value;
  }

  function setBackupDB(value: boolean) {
    return value;
  }

  const tree = renderer
    .create(
      <NavigationContainer>
        <BackupDB
          loadingDataAPP={loadingDataAPP}
          loadingDataDB={loadingDataDB}
          setBackupDB={setBackupDB}
          setStatusLoadingDataForApp={setLoadingDataAPP}
          setStatusLoadingDataForDB={setLoadingDataDB}
        />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});

test("Component BackupDB load DB complete", async () => {
  let loadingDataAPP = 90;

  function setLoadingDataAPP(value: number) {
    loadingDataAPP = value;
  }

  let loadingDataDB = 100;

  function setLoadingDataDB(value: number) {
    loadingDataDB = value;
  }

  function setBackupDB(value: boolean) {
    return value;
  }

  const tree = renderer
    .create(
      <NavigationContainer>
        <BackupDB
          loadingDataAPP={loadingDataAPP}
          loadingDataDB={loadingDataDB}
          setBackupDB={setBackupDB}
          setStatusLoadingDataForApp={setLoadingDataAPP}
          setStatusLoadingDataForDB={setLoadingDataDB}
        />
      </NavigationContainer>
    )
    .toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});

test("Component BackupDB load DB complete return", async () => {
  let loadingDataAPP = 100;

  function setLoadingDataAPP(value: number) {
    loadingDataAPP = value;
  }

  let loadingDataDB = 100;

  function setLoadingDataDB(value: number) {
    loadingDataDB = value;
  }

  function setBackupDB(value: boolean) {
    return value;
  }

  const { getByTestId } = render(
    <NavigationContainer>
      <BackupDB
        loadingDataAPP={loadingDataAPP}
        loadingDataDB={loadingDataDB}
        setBackupDB={setBackupDB}
        setStatusLoadingDataForApp={setLoadingDataAPP}
        setStatusLoadingDataForDB={setLoadingDataDB}
      />
    </NavigationContainer>
  );

  fireEvent(getByTestId("closeAndReturn"), "onPress");
  expect(loadingDataAPP).toEqual(0);
});
