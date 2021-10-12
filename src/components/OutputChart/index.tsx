import React from "react";
import { Text } from "react-native-svg";
import { PieChart } from "react-native-svg-charts";
import { Category, Operation } from "../../types";
import { Container, Title } from "./styles";

interface LabelProps {
  slices: any;
  height: number;
  width: number;
}

interface OutputChartProps {
  operations: Operation[];
  colorText?: string;
  title?: string;
}

export const OutputChart = ({
  operations,
  colorText,
  title,
}: OutputChartProps) => {
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
    return slices.map((slice: any, index: number) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <React.Fragment key={index}>
          <Text
            key={index}
            x={labelCentroid[0]}
            y={labelCentroid[1]}
            fill={colorText ? colorText : "white"}
            textAnchor={"middle"}
            alignmentBaseline={"text-bottom"}
            fontSize={10}
          >
            {`${data?.amount?.replace(".", ",")}% `}
          </Text>
          <Text
            x={labelCentroid[0]}
            y={labelCentroid[1] - 12}
            fill={colorText ? colorText : "white"}
            textAnchor={"middle"}
            alignmentBaseline={"text-bottom"}
            fontSize={10}
          >
            {`${data.category}`}
          </Text>
        </React.Fragment>
      );
    });
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }: any) => item?.amount}
        data={data}
        spacing={0}
        outerRadius={"100%"}
      >
        <Labels />
      </PieChart>
    </Container>
  );
};
