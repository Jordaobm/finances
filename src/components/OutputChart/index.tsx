import React from "react";
import { PieChart } from "react-native-svg-charts";
import { Text, G, Circle } from "react-native-svg";

interface LabelProps {
  slices: any;
  height: number;
  width: number;
}

export const OutputChart = () => {
  const data = [
    {
      key: 1,
      amount: 63.63,
      svg: { fill: "#FF6F6F" },
      category: "Mercado",
    },
    {
      key: 2,
      amount: 36.36,
      svg: { fill: "#E1A0FF" },
      category: "Internet",
    },
  ];

  const Labels = ({ slices, height, width }: LabelProps) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={"white"}
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={12}
        >
          {`${data.amount} ${data.category}`}
        </Text>
      );
    });
  };

  return (
    <PieChart
      style={{ height: 200 }}
      valueAccessor={({ item }) => item.amount}
      data={data}
      outerRadius={"95%"}
    >
      <Labels />
    </PieChart>
  );
};
