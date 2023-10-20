migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gclischn",
    "name": "total",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  // remove
  collection.schema.removeField("gclischn")

  return dao.saveCollection(collection)
})
