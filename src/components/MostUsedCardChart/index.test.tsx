import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { MostUsedCardChart, valueAccessor } from ".";
import { mockOperations } from "../../tests/mocksForTests";
import { Labels } from "./Labels";

let item = {
  amoun: 100,
};

function mockPieChart({
  style,
  valueAccessor,
  data,
  spacing,
  outerRadius,
}: any) {
  valueAccessor = ({ item }: any) => {
    return item?.amount;
  };

  valueAccessor({ item });

  let slices = [
    {
      data: {
        amount: "100.00",
        cardName: "Nubank",
        key: "1635213044162",
        svg: [Object],
      },
      endAngle: 6.283185307179587,
      index: 0,
      labelCentroid: [-2.871426524195212e-14, 75],
      padAngle: 0,
      pieCentroid: [-2.871426524195212e-14, 75],
      startAngle: 0,
      value: 100,
    },
    {
      data: {
        amount: "100.00",
        category: "Category",
        key: "1635213044162",
        svg: [Object],
      },
      endAngle: 6.283185307179587,
      index: 0,
      labelCentroid: [-2.871426524195212e-14, 75],
      padAngle: 0,
      pieCentroid: [-2.871426524195212e-14, 75],
      startAngle: 0,
      value: 100,
    },
  ];

  return (
    <>
      <Labels colorText="#ccc" slices={slices} />
    </>
  );
}

jest.mock("react-native-svg-charts", () => {
  return { PieChart: mockPieChart };
});

it("should be able to render MostUsedCardChart", async () => {
  const execFunction = valueAccessor({ item });

  const { getByTestId } = await render(
    <MostUsedCardChart
      operations={mockOperations}
      colorText="#ccc"
      title="Gastos por cartão"
    />
  );
});
