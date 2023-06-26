import { teachers } from '@prisma/client';
import teachersRepository from '@/repositories/teachers-repository';

export type CreateTeacherParams = Pick<
  teachers,
  | 'name'
  | 'cpf'
  | 'rg'
  | 'birth_date'
  | 'address'
  | 'number'
  | 'nationality'
  | 'complement'
  | 'district'
  | 'city'
  | 'state'
  | 'zip_code'
  | 'email'
  | 'cell'
  | 'observation'
>;

async function createTeacher({
  name,
  cpf,
  rg,
  birth_date,
  cell,
  nationality,
  address,
  number,
  complement,
  district,
  city,
  state,
  zip_code,
  email,
  observation,
}: CreateTeacherParams): Promise<teachers> {
  // await verifyIsEmailUnique(email)

  return await teachersRepository.createTeacher({
    name,
    cpf,
    rg,
    birth_date,
    cell,
    nationality,
    address,
    number,
    complement,
    district,
    city,
    state,
    zip_code,
    email,
    observation,
  });
}

async function updateWorkplace(
  id: number,
  {
    name,
    cpf,
    rg,
    birth_date,
    cell,
    nationality,
    address,
    number,
    complement,
    district,
    city,
    state,
    zip_code,
    email,
    observation,
  }: CreateTeacherParams
): Promise<teachers> {
  // await verifyIsEmailUnique(email)

  return await teachersRepository.updateTeacher(id, {
    name,
    cpf,
    rg,
    birth_date,
    cell,
    nationality,
    address,
    number,
    complement,
    district,
    city,
    state,
    zip_code,
    email,
    observation,
  });
}

async function listTeachers(name: string) {
  return await teachersRepository.listTeachers(name);
}

async function verifyIsEmailUnique(email: string) {
  const userSameEmailFound = await teachersRepository.findTeacherByEmail(email);
  if (userSameEmailFound) {
    // throw EmailAlreadyExists()
  }
}

async function getTeacherById(id: number) {
  return await teachersRepository.getTeacherById(id);
}

async function findTeacherByEmail(email: string) {
  return await teachersRepository.findTeacherByEmail(email);
}

async function deleteTeacher(id: number) {
  return await teachersRepository.deleteTeacher(id);
}

const teachersService = {
  createTeacher,
  findTeacherByEmail,
  listTeachers,
  getTeacherById,
  deleteTeacher,
  updateWorkplace,
};

export default teachersService;
