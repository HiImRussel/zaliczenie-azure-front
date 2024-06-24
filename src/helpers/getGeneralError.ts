/** Constants */
import { GENERAL_FIELD_NAME } from "../constants/api";

/** Types */
import { ApiError } from "../types/error.types";

const getGeneralError = (errors: ApiError[]) =>
    errors.find((error) => error.field === GENERAL_FIELD_NAME);

export default getGeneralError;
