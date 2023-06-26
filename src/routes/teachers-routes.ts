import { Router } from "express";
import { createTeacherSchema } from "@/schemas/teachers-schemas";
import { validateBody, authenticateToken } from "@/middlewares";
import teachersController from "@/controllers/teachers-controller";

const teachersRoutes = Router()

teachersRoutes.all('/*',authenticateToken)
        .post('/', validateBody(createTeacherSchema), teachersController.create )
        .get('/list', teachersController.list)
        .get('/:id', teachersController.getById)
        .put('/:id', teachersController.update)
        .delete('/:id', teachersController.remove)


export { teachersRoutes }