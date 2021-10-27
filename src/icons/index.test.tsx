import { render } from "@testing-library/react-native";
import React from "react";
import {
  ArrowDown,
  ArrowLeftIcon,
  BackupIcon,
  BulletsIcon,
  CardIcon,
  CheckIcon,
  InputOperationCoin,
  OutputOperationCoin,
  PlusIcon,
  RefreshIcon,
  SearchIcon,
  TransferOperationIcon,
  TrashIcon,
  WalletIcon,
} from "./Icons";

import {
  ChartIcon,
  HomeIcon,
  MoneyIcon,
  TagIcon,
  WalletIcon as WalletIconNavigationIcons,
} from "./NavigationIcons";

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

      <ChartIcon color={color} />

      <HomeIcon color={color} />

      <MoneyIcon color={color} />

      <TagIcon color={color} />

      <WalletIconNavigationIcons color={color} />
    </>
  );
});
