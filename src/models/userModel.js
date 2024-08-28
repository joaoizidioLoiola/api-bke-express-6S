import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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

