migrate((db) => {
  const collection = new Collection({
    "id": "n9p4fvrma8oiq8b",
    "created": "2023-02-06 17:53:44.883Z",
    "updated": "2023-02-06 17:53:44.883Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fgrdvqge",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b");

  return dao.deleteCollection(collection);
})
