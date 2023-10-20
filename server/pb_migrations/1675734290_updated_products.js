migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhk57uof",
    "name": "image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/vnd.mozilla.apng",
        "image/gif",
        "image/webp",
        "image/svg+xml"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // remove
  collection.schema.removeField("uhk57uof")

  return dao.saveCollection(collection)
})
