import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
  idUser: z.number({ message: "Id deve ser um número inteiro" })
    .positive({ message: "Id deve ser um número positivo" }),
  nameUser: z.string({ message: "O nome deve ser uma string" })
    .min(2, { message: "O nome deve ter no mínimo 2 caracteres" })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres" }),
  emailUser: z.string({ required_error: "O email é obrigatório", invalid_type_error: "O email deve ser uma string" })
    .email({ message: "Email invalido" })
    .max(200, { message: "O email deve ter no máximo 200 caracteres" }),
  pass: z.string({ required_error: "A senha é obrigatória", invalid_type_error: "A senha deve ser uma string" })
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
    .max(50, { message: "A senha deve ter no máximo 50 caracteres" })
});

export const validateUser = (user) => {
  return userSchema.safeParse(user);
}

export const validateUserToCreate = (user) => {
  const partialUserSchema = userSchema.partial({
    idUser: true
  });
  return partialUserSchema.safeParse(user);
}

export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      idUser: true,
      nameUser: true,
      emailUser: true
    }
  })
  return users
}

const getUserById = async (idUser) => {
  return await prisma.user.findUnique({
    where: {
      idUser: parseInt(idUser)
    }
  });
}

const postUser = async (newUser) => {
  return await prisma.user.create({
    data: {
      nameUser: newUser.nameUser,
      emailUser: newUser.emailUser,
      pass: newUser.pass
    }
  })
}

const editUser = async (idUser, nameUser, emailUser, pass) => {
  return await prisma.user.update({
    where: {
      idUser: parseInt(idUser)
    },
    data: {
      idUser: parseInt(idUser),
      nameUser: nameUser,
      emailUser: emailUser,
      pass: pass
    }
  })
}

const editNameUser = async (idUser, nameUser) => {
  return await prisma.user.update({
    where: {
      idUser: parseInt(idUser)
    },
    data: {
      nameUser: nameUser
    }
  })
}

const deleteUser = async (idUser) => {
  return await prisma.user.delete({
    where: {
      idUser: parseInt(idUser)
    }
  })
}

export default { getAll, getUserById, postUser, editUser, deleteUser, editNameUser };