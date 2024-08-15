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
      userName: true,
      emailUser: true
    }
  })
  return users
}

const getUserById = (idUser) => {
  return users.find(user => user.idUser === parseInt(idUser));
}

const postUser = (newUser) => {
  users.push(newUser);
}

const editUser = (idUser) => {
  const index = users.findIndex(user => user.idUser === parseInt(idUser));
}
const editNameUser = (idUser, nameUser) => {
  const user = getUserById(idUser);
  if (user) {
    user.nameUser = nameUser;
  }
  return user;
}

const deleteUser = (idUser) => {
  users = users.filter(user => user.idUser !== parseInt(idUser));
}

export default { getAll, getUserById, postUser, editUser, deleteUser, editNameUser };

