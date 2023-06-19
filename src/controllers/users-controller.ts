import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import userService from '@/services/users-service'
import { AuthenticatedRequest } from '@/middlewares'
import sessionsService from '@/services/sessions-service'

async function signUp(request: Request, response: Response, next: NextFunction) {
    try {
        const {name, email, password} = request.body 
        await userService.createUser({name, email, password})
        response.sendStatus(httpStatus.OK)
    } catch (error) {
        next(error)
    }
}

async function signIn(request: Request, response: Response, next: NextFunction) {
    try {
        const {email, password} = request.body 
        const token = await userService.validateCredentialsAndGetToken({email, password})
        response.status(httpStatus.OK).send(token)
    } catch (error) {
        next(error)
    }
}

async function signOut(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    try {
        const token = request.header('Authorization').split(' ')[1]
        await sessionsService.deleteSession(token)
        response.sendStatus(httpStatus.OK)
    } catch (error) {
        next(error)
    }
}

export default {
    signUp,
    signIn,
    signOut
}