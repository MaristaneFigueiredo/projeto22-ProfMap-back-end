import joi from 'joi'
import { CreateTeacherParams } from '@/services/teachers-service'

export const createTeacherSchema = joi.object<CreateTeacherParams>({
    name: joi.string().required(),
    cpf: joi.string().required(),
    rg: joi.string().required(),
    birth_date: joi.string().required(),
    cell: joi.string().required(),
    nationality: joi.string().required(),
    address: joi.string().required(),
    number: joi.number().required(),
    complement: joi.string().allow(null).allow('').optional(),
    district: joi.string().allow(null).allow('').optional(),
    city: joi.string().required(),
    state: joi.string().required(),
    zip_code: joi.string().required(),
    email: joi.string().email().required(),
    observation: joi.string().allow(null).allow('').optional(),
})