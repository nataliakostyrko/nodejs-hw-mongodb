import nodemailer from 'nodemailer';
import env from './env.js';
import { SMTP_ENV_VARS } from '../constants/index.js';

const transporter = nodemailer.createTransport({
  host: env(SMTP_ENV_VARS.SMTP_HOST),
  port: Number(env(SMTP_ENV_VARS.SMTP_PORT)),
  auth: {
    user: env(SMTP_ENV_VARS.SMTP_USER),
    pass: env(SMTP_ENV_VARS.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};
