import {prisma} from "@/config/database";
import { CreateTeacherParams } from "@/services/teachers-service";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
import { teachers } from "@prisma/client";



async function createTeacher(data: CreateTeacherParams):Promise<teachers> {
    return prisma.teachers.create({
        data: {
            ...data,
            birth_date: new Date(dayjs(data.birth_date, 'DD/MM/YYYY').format('YYYY-MM-DD')),
            createdAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        },
        
    })
}

async function updateTeacher(id: number, data: CreateTeacherParams ): Promise<teachers> {
    return await prisma.teachers.update({
        where: {
            id,
        },
        data: {
            ...data,
            birth_date: new Date(dayjs(data.birth_date, 'DD/MM/YYYY').format('YYYY-MM-DD')),
            updatedAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        }
    })
}

async function listTeachers(name: string) {
    return prisma.teachers.findMany({
        where: {
            name: {
                contains: name,
            }
        }
    })
}

async function getTeacherById(id: number) {
    return prisma.teachers.findUnique({
        where: {
            id,
        }
    })
}

async function findTeacherByEmail(email: string) {
    return prisma.teachers.findFirst({
        where: {
            email,
        }
    })
}

async function deleteTeacher(id: number): Promise<teachers> {
    return await prisma.teachers.delete({
        where: {
            id,
        }
    })
}

const teachersRepository = {
    createTeacher,
    findTeacherByEmail,
    listTeachers,
    getTeacherById,
    deleteTeacher,
    updateTeacher
}

export default teachersRepository