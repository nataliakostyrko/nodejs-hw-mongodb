import Joi from 'joi';


export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().min(3).max(20).required(),
  password: Joi.string().min(3).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().min(3).max(20).required(),
  password: Joi.string().min(3).required(),
});
export const requestResetEmailSchema = Joi.object({
  email: Joi.string().required(),
});

export const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string().min(3).required(),
});

export const loginWithGoogleOAuthSchema = Joi.object({
  code: Joi.string().required(),
});

