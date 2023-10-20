migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sebwahed",
    "name": "img",
    "type": "text",
    "required": false,
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
  collection.schema.removeField("sebwahed")

  return dao.saveCollection(collection)
})
