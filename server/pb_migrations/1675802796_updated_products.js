migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhk57uof",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "image/png"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // update
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
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "image/png"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
