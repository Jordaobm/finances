import React from "react";
import { Text } from "react-native-svg";

interface LabelProps {
  slices: any;
  colorText?: string;
}

export const Labels = ({ slices, colorText }: LabelProps) => {
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
          {`${data.cardName || data?.category}`}
        </Text>
      </React.Fragment>
    );
  });
};
