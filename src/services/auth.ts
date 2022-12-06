import { Auth } from "../interface/auth.interface";
import UserModel from "../models/user";
import { User } from "../interface/user.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREDY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};
const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";
  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "INCORRECT_PASSWORD";

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };

  return data;
};

export { registerNewUser, loginUser };
