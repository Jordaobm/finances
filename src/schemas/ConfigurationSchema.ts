export default class Card {
  static schema = {
    name: "Configuration",
    primaryKey: "id",
    properties: {
      id: "string",
      monthYear: "string",
      firstDayMonth: "string",
      lastDayMonth: "string",
    },
  };
}
