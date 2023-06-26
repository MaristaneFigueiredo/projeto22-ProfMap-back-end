import { Router } from "express";
import { createTeachersWorkplacesSchema } from "@/schemas";
import { validateBody, authenticateToken } from "@/middlewares";
import teachersWorkplacesController from "@/controllers/teachers-workplaces";
// import { createTeacherSchema } from "@/schemas/teachers-schemas";
// import teachersController from "@/controllers/teachers-controller";

const teachersWorkplaces = Router()

teachersWorkplaces.all('/*',authenticateToken)
        .post('/', validateBody(createTeachersWorkplacesSchema), teachersWorkplacesController.create)
        .get('/teacher/:idTeacher', teachersWorkplacesController.getWorkplacesByTeacherId )
        .delete('/:id', teachersWorkplacesController.remove)


export { teachersWorkplaces }