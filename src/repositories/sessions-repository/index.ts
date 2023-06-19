import { prisma } from "@/config/database";
import { CreateSessionParams } from "@/services/sessions-service";
import dayjs from "dayjs";

const sessionsTable = prisma.sessions

async function createSession(data: CreateSessionParams) {
    return sessionsTable.create({
        data: {
            ...data,
            createdAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss'))
        },
        
    })
}

async function findSessionByToken(token: string) {
    return sessionsTable.findFirst({
        where: {
            token,
        }
    })
}

async function deleteSession(id: number) {
    return await sessionsTable.delete({
        where: {
            id
        }
    })
}

const sessionsRepository = {
    createSession,
    findSessionByToken,
    deleteSession
}

export default sessionsRepository