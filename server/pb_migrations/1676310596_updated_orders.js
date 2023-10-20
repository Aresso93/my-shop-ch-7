migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oz8v51bl",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "done"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  // remove
  collection.schema.removeField("oz8v51bl")

  return dao.saveCollection(collection)
})
