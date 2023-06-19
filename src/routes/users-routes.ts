import { Router } from "express";
import { createUserSchema } from "@/schemas/users-schemas";
import { createAuthSchema } from "@/schemas/auth-schemas";
import usersController from '@/controllers/users-controller'
import { validateBody, authenticateToken } from "@/middlewares";

const usersRoutes = Router()

usersRoutes.post('/sign-up', validateBody(createUserSchema), usersController.signUp )
        .post('/sign-in', validateBody(createAuthSchema), usersController.signIn )
        .delete('/sign-out', authenticateToken, usersController.signOut)


export { usersRoutes }