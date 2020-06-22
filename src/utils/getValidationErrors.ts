import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validadtionsErrors: Errors = {};

  err.inner.forEach((error) => {
    validadtionsErrors[error.path] = error.message;
  });
  return validadtionsErrors;
}
