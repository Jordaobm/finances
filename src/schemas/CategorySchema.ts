export default class Category {
  static schema = {
    name: "Category",
    primaryKey: "id",
    properties: {
      id: "string",
      name: "string",
      color: "string",
      number: "float",
    },
  };
}
