import Utils from '../app/utils'
import * as yup from 'yup'

module.exports = {
    validateUserLogin: async (req, res, next) => {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            name: yup.string().required(),
        })
        await validate(schema, req.body, res, next)
    },
    validateUpdateUser: async (req, res, next) => {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            name: yup.string().required(),
            userId: yup.string().required(),
        })
        await validate(schema, req.body, res, next)
    },
    validateAddCategory: async (req, res, next) => {
        const schema = yup.object().shape({
            name: yup.string().required(),
            user: yup.string().required(),
        })
        await validate(schema, req.body, res, next)
    },
    validateUpdateCategory: async (req, res, next) => {
        const schema = yup.object().shape({
            name: yup.string().required(),
            userId: yup.string().required(),
            categoryId: yup.string().required(),
        })
        await validate(schema, req.body, res, next)
    },
    validateGetCategoryList: async (req, res, next) => {
        const schema = yup.object().shape({
            userId: yup.string().required(),
        })
        await validate(schema, req.query, res, next)
    },
    validatePaginatedQuery: async (req, res, next) => {
        const schema = yup.object().shape({
            name: yup.string().required(),
            userId: yup.string().required(),
        })
        await validate(schema, req.body, res, next)
    },
    validateAddTransaction: async (req, res, next) => {
        const schema = yup.object().shape({
            amount: yup.number().required(),
            description: yup.string().required(),
            category: yup.string().required(),
            user: yup.string().required(),
        })
        await validate(schema, req.body, res, next)
    }
}

const validate = async (schema, reqData, res, next) => {
    try {
        await schema.validate(reqData, {abortEarly: false})
        next()
    } catch (e) {
        const errors = e.inner.map(({path, message, value}) => ({path, message, value}))
        Utils.responseForValidation(res, errors)
    }
}
