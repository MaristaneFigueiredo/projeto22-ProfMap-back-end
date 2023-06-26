import { Router } from "express";
import { createWorkplaceSchema } from "@/schemas/workplaces-schema";
import { validateBody, authenticateToken } from "@/middlewares";
import workplacesController from "@/controllers/workplaces-controller";

const workplacesRoutes = Router()

workplacesRoutes.all('/*',authenticateToken)
        .post('/', validateBody(createWorkplaceSchema), workplacesController.create )
        .get('/list', workplacesController.list)
        .get('/:id', workplacesController.getById)
        .put('/:id', workplacesController.update)
        .delete('/:id', workplacesController.remove)

export { workplacesRoutes }