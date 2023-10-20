migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n9p4fvrma8oiq8b")

  // remove
  collection.schema.removeField("uhk57uof")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmqdomst",
    "name": "description",
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

  // add
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
      "thumbs": [
        "100x100"
      ]
    }
  }))

  // remove
  collection.schema.removeField("qmqdomst")

  return dao.saveCollection(collection)
})
