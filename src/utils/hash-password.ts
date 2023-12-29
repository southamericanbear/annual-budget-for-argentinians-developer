import { hash } from 'bcrypt';

const hashPasswordRate = process.env.HASH_PASSWORD_RATE;

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, Number(hashPasswordRate));
  return hashedPassword;
};
