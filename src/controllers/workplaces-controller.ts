import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import workplacesService from '@/services/workplaces-service'
import { AuthenticatedRequest } from '@/middlewares'

async function create(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    try {
        const {name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation} = request.body 
        await workplacesService.createWorkplace({name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation})

        response.sendStatus(httpStatus.OK)

    } catch (error) {
        next(error)
    }
}

async function list(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    try {
        const name = String(request.query.name ?? '') 
        const workplaces = await workplacesService.listWorkplace(name)
        const result = workplaces.map(w => {
            return {
                id: w.id,
                text: w.name,
            }
        })

        response.status(httpStatus.OK).send(result)

    } catch (error) {
        next(error)
    }
}

async function getById(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    try {
        const id = Number(request.params.id )
        const workplaces = await workplacesService.getWorkplaceById(id)

        response.status(httpStatus.OK).send(workplaces)

    } catch (error) {
        next(error)
    }
}

async function update(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    try {
        const id = Number(request.params.id )
        const {name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation} = request.body 
        await workplacesService.updateWorkplace(id, {name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation})

        response.sendStatus(httpStatus.OK)

    } catch (error) {
        next(error)
    }
}

async function remove(request: AuthenticatedRequest, response: Response, next: NextFunction) {
    try {
        const id = Number(request.params.id )
        const workplaces = await workplacesService.deleteWorkplace(id)

        response.status(httpStatus.NO_CONTENT).send(workplaces)

    } catch (error) {
        next(error)
    }
}


export default {
    create,
    list,
    getById,
    update,
    remove

}