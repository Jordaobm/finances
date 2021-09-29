export default class Category {
  static schema = {
    name: "Operation",
    primaryKey: "id",
    properties: {
      id: "string",
      type: "string",
      name: "string",
      value: "double",
      id_category: "string",
      date: "string",
      id_card: "string",
    },
  };
}
