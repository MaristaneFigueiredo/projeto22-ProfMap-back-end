import { workplaces } from "@prisma/client";
import workplacesRepository from "@/repositories/workplaces-repository";


export type createWorkplacesParams = Pick<workplaces, 'name' | 'address' | 'number' | 'complement' | 'district' | 'city' | 'state' | 'zip_code' | 'latitude' | 'longitude' | 'email' | 'observation'>


async function createWorkplace({name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation}: createWorkplacesParams): Promise<workplaces> {
    return await workplacesRepository.createWorkplace({name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation})
}

async function listWorkplace(name: string) {
    return await workplacesRepository.listWorkplaces(name)
}

async function getWorkplaceById(id: number) {
    return await workplacesRepository.getWorkplaceById(id)
}

async function updateWorkplace(id: number, {name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation}: createWorkplacesParams): Promise<workplaces> {
    return await workplacesRepository.updateWorkplace(id, {name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation})
}

async function deleteWorkplace(id: number) {
    return await workplacesRepository.deleteWorkplace(id)
}

const workplacesService = {
    createWorkplace,
    listWorkplace,
    getWorkplaceById,
    updateWorkplace,
    deleteWorkplace
}

export default workplacesService