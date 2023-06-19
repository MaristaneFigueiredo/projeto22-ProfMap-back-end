import joi from 'joi'
import { CreateAuthParams } from '../services/users-service'

export const createAuthSchema = joi.object<CreateAuthParams>({
    email: joi.string().email().required(),
    password: joi.string().required()
})