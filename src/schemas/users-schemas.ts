import joi from 'joi'
import { CreateUserParams } from '../services/users-service'

export const createUserSchema = joi.object<CreateUserParams>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
})