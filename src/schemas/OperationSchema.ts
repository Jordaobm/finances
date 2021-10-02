export default class OperationSchema {
  static schema = {
    name: "Operation",
    primaryKey: "id",
    properties: {
      id: "string",
      type: "string",
      name: "string",
      value: "double",
      id_category: "string",
      date: "date",
      id_card: "string",
    },
  };
}
