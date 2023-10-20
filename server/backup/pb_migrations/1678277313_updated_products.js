migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gz02pgja2ripuv0")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gz02pgja2ripuv0")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
