import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import teachersService from '@/services/teachers-service';
import { AuthenticatedRequest } from '@/middlewares';

async function create(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  try {
    const {
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
    } = request.body;
    await teachersService.createTeacher({
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

    response.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

async function update(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  try {
    const id = Number(request.params.id);
    const {
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
    } = request.body;
    await teachersService.updateWorkplace(id, {
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

    response.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

async function list(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  try {
    const name = String(request.query.name ?? '');
    const teachers = await teachersService.listTeachers(name);
    const result = teachers.map((w) => {
      return {
        id: w.id,
        text: w.name,
      };
    });

    response.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

async function getById(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  try {
    const id = Number(request.params.id);
    const teachers = await teachersService.getTeacherById(id);

    response.status(httpStatus.OK).send(teachers);
  } catch (error) {
    next(error);
  }
}

async function remove(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  try {
    const id = Number(request.params.id);
    const teachers = await teachersService.deleteTeacher(id);

    response.status(httpStatus.NO_CONTENT).send(teachers);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  list,
  getById,
  remove,
  update,
};
