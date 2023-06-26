import { teachers_workplace } from "@prisma/client";
import teachersWorkplacesRepository from "@/repositories/teachers-workplaces-repository";


export type createTeacherWorkplaceParams = Pick<teachers_workplace, 'teacher_id' | 'workplace_id' >


async function createTeacherWorkplace({teacher_id, workplace_id}: createTeacherWorkplaceParams): Promise<teachers_workplace> {
    return await teachersWorkplacesRepository.createTeacherWorkplace({teacher_id, workplace_id})
}

async function getWorkplacesByTeacherId(teacherId: number){
    return await teachersWorkplacesRepository.getWorkplacesByTeacherId(teacherId)
}

// async function listWorkplace(name: string) {
//     return await workplacesRepository.listWorkplaces(name)
// }

// async function getWorkplaceById(id: number) {
//     return await workplacesRepository.getWorkplaceById(id)
// }

// async function updateWorkplace(id: number, {name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation}: createWorkplacesParams): Promise<workplaces> {
//     return await workplacesRepository.updateWorkplace(id, {name, address, number, complement, district, city, state, zip_code, latitude, longitude, email, observation})
// }

async function deleteTeacherWorkplace(id: number) {
    return await teachersWorkplacesRepository.deleteTeacherWorkplace(id)
}

const teachersWorkplacesService = {
    createTeacherWorkplace,
    getWorkplacesByTeacherId,
    // listWorkplace,
    // getWorkplaceById,
    // updateWorkplace,
    deleteTeacherWorkplace
}

export default teachersWorkplacesService