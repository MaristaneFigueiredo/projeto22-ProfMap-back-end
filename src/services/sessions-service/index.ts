import { sessions } from '@prisma/client';
import sessionsRepository from '@/repositories/sessions-repository';

export type CreateSessionParams = Pick<sessions, 'token' | 'user_id'>;
export type SessionData = Pick<sessions, 'id' | 'user_id' | 'token'>;

async function createSession({
  user_id,
  token,
}: CreateSessionParams): Promise<sessions> {
  return await sessionsRepository.createSession({ user_id, token });
}

async function findSessionByToken(token: string): Promise<sessions> {
  return await sessionsRepository.findSessionByToken(token);
}

async function deleteSession(token: string): Promise<sessions> {
  const session = await findSessionByToken(token);
  return sessionsRepository.deleteSession(session.id);
}

const sessionsService = {
  createSession,
  findSessionByToken,
  deleteSession,
};

export default sessionsService;
