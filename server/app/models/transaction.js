const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  locationId: { type: String, default: '' },
  meterNumber: { type: String, default: '' },
  readings: { type: Array, default: [] },
  isDeleted: { type: Boolean, default: false },
  isInActive: { type: Boolean, default: false },
  addedOn: { type: Number, default: Date.now() },
  modifiedOn: { type: Number, default: Date.now() }
})

transactionSchema.method({
  saveData: async function () {
    return this.save()
  }
})
transactionSchema.static({
  findData: function (findObj) {
    return this.find(findObj)
  },
  findOneData: function (findObj) {
    return this.findOne(findObj)
  },
  findOneAndUpdateData: function (findObj, updateObj) {
    return this.findOneAndUpdate(findObj, updateObj, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true
    })
  },
  findDataWithAggregate: function (findObj) {
    return this.aggregate(findObj)
  }
})
export default mongoose.model('fet-transaction', transactionSchema)
