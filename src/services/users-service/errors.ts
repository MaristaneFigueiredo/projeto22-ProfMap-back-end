import { ApplicationError } from "@/protocols";

export function EmailAlreadyExists(): ApplicationError {
    return {
        name: 'EmailAlreadyExists',
        message: 'There is already an user with given email'
    }
}


export function AccessDenied(): ApplicationError {
    return {
        name: 'AccessDenied',
        message: 'Access denied!'
    }
}
