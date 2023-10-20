migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lz0wdg1a",
    "name": "cost",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // remove
  collection.schema.removeField("lz0wdg1a")

  return dao.saveCollection(collection)
})
