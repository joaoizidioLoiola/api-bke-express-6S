import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
  id: z.number({ message: "Id deve ser um número inteiro" })
    .positive({ message: "Id deve ser um número positivo" }),
  name: z.string({ message: "O nome deve ser uma string" })
    .min(2, { message: "O nome deve ter no mínimo 2 caracteres" })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres" }),
  email: z.string({ required_error: "O email é obrigatório", invalid_type_error: "O email deve ser uma string" })
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
    id: true
  });
  return partialUserSchema.safeParse(user);
}


let users = [
  {
    idUser: 1,
    nameUser: "Joao Izidio",
    emailUser: "joaoizidioloiola@icloud.com"
  },
  {
    idUser: 2,
    nameUser: "Joao",
    emailUser: "joao@icloud.com"
  }
];

export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true
    }
  })
  return users
}

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(id)
    }
  });
}

const postUser = async (newUser) => {
  return await prisma.user.create({
    data: {
      name: newUser.name,
      email: newUser.email,
      pass: newUser.pass
    }
  })
}

const editUser = async (id, name, email, pass) => {
  return await prisma.user.update({
    where: {
      id: parseInt(id)
    },
    data: {
      id: parseInt(id),
      nameUser: name,
      emailUser: email,
      pass: pass
    }
  })
}

const editNameUser = async (id, name) => {
  return await prisma.user.update({
    where: {
      id: parseInt(id)
    },
    data: {
      name: name
    }
  })
}

const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: {
      id: parseInt(id)
    }
  })
}

export default { getAll, getUserById, postUser, editUser, deleteUser, editNameUser };