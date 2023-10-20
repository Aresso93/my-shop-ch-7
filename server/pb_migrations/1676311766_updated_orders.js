migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ruqkblm",
    "name": "order",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7zhup1uycgzmnww")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ruqkblm",
    "name": "orderData",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
