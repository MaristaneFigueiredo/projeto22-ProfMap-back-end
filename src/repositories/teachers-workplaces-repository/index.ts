import {prisma} from "@/config/database";
import { createTeacherWorkplaceParams } from "@/services/teachers-workplaces";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { teachers_workplace } from "@prisma/client";



async function createTeacherWorkplace(data: createTeacherWorkplaceParams):Promise<teachers_workplace> {
    return await prisma.teachers_workplace.create({
        data: {
            ...data,
            createdAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
            updatedAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        },
        
    })
}

async function getWorkplacesByTeacherId(teacherId: number) {
    return await prisma.teachers_workplace.findMany({
        include: {
            workplaces: {
                select: {
                    id: true,
                    name: true,
                }
            }
        },
        where: {
            teacher_id: teacherId,
        }
    })
}

// async function updateTeacher(id: number, data: CreateTeacherParams ): Promise<teachers> {
//     return await prisma.teachers.update({
//         where: {
//             id,
//         },
//         data: {
//             ...data,
//             birth_date: new Date(dayjs(data.birth_date, 'DD/MM/YYYY').format('YYYY-MM-DD')),
//             updatedAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
//         }
//     })
// }

// async function listTeachers(name: string) {
//     return prisma.teachers.findMany({
//         where: {
//             name: {
//                 contains: name,
//             }
//         }
//     })
// }

// async function getTeacherById(id: number) {
//     return prisma.teachers.findUnique({
//         where: {
//             id,
//         }
//     })
// }

// async function findTeacherByEmail(email: string) {
//     return prisma.teachers.findFirst({
//         where: {
//             email,
//         }
//     })
// }

async function deleteTeacherWorkplace(id: number): Promise<teachers_workplace> {
    return await prisma.teachers_workplace.delete({
        where: {
            id,
        }
    })
}

const teachersWorkplacesRepository = {
    createTeacherWorkplace,
    getWorkplacesByTeacherId,
    // findTeacherByEmail,
    // listTeachers,
    // getTeacherById,
    deleteTeacherWorkplace,
    // updateTeacher
}

export default teachersWorkplacesRepository