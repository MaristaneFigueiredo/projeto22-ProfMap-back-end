import joi from 'joi'
import { createWorkplacesParams } from '@/services/workplaces-service'

export const createWorkplaceSchema = joi.object<createWorkplacesParams>({
    name: joi.string().required(),
    address: joi.string().required(),
    number: joi.number().required(),
    complement: joi.string().allow(null).allow('').optional(),
    district: joi.string().allow(null).allow('').optional(),
    city: joi.string().required(),
    state: joi.string().required(),
    zip_code: joi.string().required(),
    latitude: joi.number().required(),
    longitude: joi.number().required(),
    email: joi.string().email().required(),
    observation: joi.string().allow(null).allow('').optional(),
})