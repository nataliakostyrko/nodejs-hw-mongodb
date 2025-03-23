import createHttpError from 'http-errors';
import { createContactSchema } from '../validation/contacts.js';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await createContactSchema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Bad Request', { error: err.details });
    next(error);
  }
};
