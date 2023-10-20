migrate((db) => {
  const collection = new Collection({
    "id": "7zhup1uycgzmnww",
    "created": "2023-02-07 01:41:40.408Z",
    "updated": "2023-02-07 01:41:40.408Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0ruqkblm",
        "name": "data",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww");

  return dao.deleteCollection(collection);
})
