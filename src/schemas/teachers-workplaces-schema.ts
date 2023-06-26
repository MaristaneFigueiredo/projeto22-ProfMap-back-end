import joi from 'joi'
import { CreateTeacherParams } from '@/services/teachers-service'

export const createTeachersWorkplacesSchema = joi.object<CreateTeacherParams>({
    teacher_id: joi.number().required(),
    workplace_id: joi.number().required(),
  
})