import React from "react";
import Svg, { Circle, Path, Rect, Text } from "react-native-svg";
import { PieChart } from "react-native-svg-charts";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { Category } from "../../types";

interface LabelProps {
  slices: any;
  height: number;
  width: number;
}

export const OutputChart = () => {
  const { operations } = useUpdateDataContext();

  const outPutOperations = operations?.filter((e) => e?.type === "OUTPUT");
  let outPutCategories: Category[] = [];

  outPutOperations?.forEach((operation) => {
    if (!outPutCategories?.find((e) => e?.id === operation?.category?.id)) {
      outPutCategories.push(operation?.category);
    }
  });

  let totalOutPutCategories = 0;

  outPutCategories?.forEach((e) => {
    totalOutPutCategories = totalOutPutCategories + Number(e?.accumuledValue);
  });

  const data = outPutCategories?.map((category) => ({
    key: category?.id,
    amount: Number(
      (Number(category?.accumuledValue) / totalOutPutCategories) * 100
    ).toFixed(2),
    svg: { fill: category?.color },
    category: category?.name,
  }));

  const Labels = ({ slices, height, width }: LabelProps) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <>
          <Text
            key={index}
            x={labelCentroid[0]}
            y={labelCentroid[1]}
            fill={"white"}
            textAnchor={"middle"}
            alignmentBaseline={"text-bottom"}
            fontSize={10}
          >
            {`${data?.amount?.replace(".", ",")}% `}
          </Text>
          <Text
            x={labelCentroid[0]}
            y={labelCentroid[1] - 12}
            fill={"white"}
            textAnchor={"middle"}
            alignmentBaseline={"text-bottom"}
            fontSize={10}
          >
            {`${data.category}`}
          </Text>
        </>
      );
    });
  };

  return (
    <PieChart
      style={{ height: 200 }}
      valueAccessor={({ item }) => item.amount}
      data={data}
      spacing={0}
      outerRadius={"100%"}
    >
      <Labels />
    </PieChart>
  );
};
