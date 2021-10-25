import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { CardCategories } from ".";
import {
  ArrowLeftIcon,
  BulletsIcon,
  PlusIcon,
  TrashIcon,
  ArrowDown,
  BackupIcon,
  CardIcon,
  CheckIcon,
  InputOperationCoin,
  OutputOperationCoin,
  RefreshIcon,
  SearchIcon,
  TransferOperationIcon,
  WalletIcon,
} from "./Icons";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

it("must be able to render all icons", async () => {
  let color = "#3CC75E";

  const renderResult = await render(
    <>
      <PlusIcon color={color} />

      <ArrowLeftIcon color={color} />

      <TrashIcon color={color} />

      <BulletsIcon color={color} />

      <ArrowDown color={color} />

      <BackupIcon color={color} />

      <CardIcon color={color} />

      <CheckIcon color={color} />

      <InputOperationCoin color={color} />

      <OutputOperationCoin color={color} />

      <RefreshIcon color={color} />

      <SearchIcon color={color} />

      <TransferOperationIcon color={color} />

      <WalletIcon color={color} />
    </>
  );
});
