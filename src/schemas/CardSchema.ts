export default class Card {
  static schema = {
    name: "Card",
    primaryKey: "id",
    properties: {
      id: "string",
      institutionName: "string",
      currentValue: "int",
      colorBackground: "string",
      colorBackgroundNumber: "int",
      colorText: "string",
      colorTextNumber: "int",
    },
  };
}
