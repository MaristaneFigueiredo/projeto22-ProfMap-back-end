import {prisma} from "@/config/database";
import { createWorkplacesParams } from "@/services/workplaces-service";
import { workplaces } from "@prisma/client";
// import { Prisma } from "@prisma/client";
import dayjs from "dayjs";


async function createWorkplace(data: createWorkplacesParams) {
    return prisma.workplaces.create({
        data: {
            ...data,
            createdAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        },
        
    })
}

async function findWorkplaceByEmail(email: string) {
    return prisma.workplaces.findFirst({
        where: {
            email,
        }
    })
}

async function getWorkplaceById(id: number) {
    return prisma.workplaces.findUnique({
        where: {
            id,
        }
    })
}

async function listWorkplaces(name: string) {
    return prisma.workplaces.findMany({
        where: {
            name: {
                contains: name,
            }
        }
    })
}

async function updateWorkplace(id: number, data: createWorkplacesParams ): Promise<workplaces> {
    return await prisma.workplaces.update({
        where: {
            id,
        },
        data: {
            ...data,
            updatedAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        }
    })
}

async function deleteWorkplace(id: number): Promise<workplaces> {
    return await prisma.workplaces.delete({
        where: {
            id,
        }
    })
}

const workplacesRepository = {
    createWorkplace,
    findWorkplaceByEmail,
    listWorkplaces,
    getWorkplaceById,
    updateWorkplace,
    deleteWorkplace
}

export default workplacesRepository