import {Schema} from "mongoose";
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {type: String, default: ''},
    user: {
        type: Schema.Types.ObjectId,
        ref: "fet-user",
    },
    isDeleted: {type: Boolean, default: false},
    isInActive: {type: Boolean, default: false},
    addedOn: {type: Number, default: Date.now()},
    modifiedOn: {type: Number, default: Date.now()}
})

categorySchema.method({
    saveData: async function () {
        return this.save()
    }
})
categorySchema.static({
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
export default mongoose.model('fet-category', categorySchema)
