import { ApplicationError } from "../protocols";

export function invalidDataError(details: string[]): ApplicationInvalidDataError {
    return {
        name: 'InvalidDataError',
        message: 'Invalid data',
        details
    }

}


type ApplicationInvalidDataError = ApplicationError & {
    details: string[]
}