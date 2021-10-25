import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";
import { useUpdateDataContext } from "../../context/UpdateDataContext";
import { Card } from "../../types";
import { CardComponent, FakeCard, Wallet } from "../Card";
import { Dimensions } from "react-native";
interface ItemProps {
  title: string;
  text: string;
}

interface CustomCarouselProps {
  onChangeCard: (card: Card) => void;
}
interface RenderItemProps {
  item: Card;
  index: number;
}

export const CustomCarousel: React.SFC<CustomCarouselProps> = ({
  onChangeCard,
}) => {
  const { cards, selectedCard, wallet } = useUpdateDataContext();

  const cardsWithWallets = [...cards, wallet];

  const [carouselItems, setCarouselItems] = useState<Card[]>([
    {} as Card,
    ...cardsWithWallets,
  ]);
  const ref = useRef(null);

  const renderCarousel = () => {
    return (
      <Carousel
        layout={"default"}
        ref={ref}
        firstItem={
          cardsWithWallets?.findIndex((card) => card?.id === selectedCard?.id) +
          1
        }
        data={carouselItems}
        sliderWidth={Dimensions.get("window").width - 60}
        itemWidth={290}
        renderItem={renderItem}
        onSnapToItem={(index: number) => {
          onChangeCard(carouselItems[index]);
        }}
      />
    );
  };

  useEffect(() => {
    setCarouselItems([{} as Card, ...cardsWithWallets]);
    renderCarousel();
  }, [cards, wallet]);

  const renderItem = useCallback(({ item }: RenderItemProps) => {
    if (item?.id) {
      return <CardComponent card={item} />;
    } else {
      return <FakeCard />;
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        {renderCarousel()}
      </View>
    </SafeAreaView>
  );
};
