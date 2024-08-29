import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const getAllProds = async () => {
  const prods = await prisma.prod.findMany()
  return prods;
}

const getProdById = async (idProd) => {
  const parsedId = parseInt(idProd);
  return await prisma.prod.findUnique({
    where: {
      idProd: parsedId
    },
    include: {
      user: true
    }
  });
}

const postProd = async (newProd) => {
  return await prisma.prod.create({
    data: {
      nomeProd: newProd.nomeProd,
      categoria: newProd.categoria,
      precoProd: newProd.precoProd
    }
  });
}

const editProd = async (idProd, nomeProd, categoria, precoProd) => {
  return await prisma.prod.update({
    where: {
      idProd: parseInt(idProd)
    },
    data: {
      idProd: parseInt(idProd),
      nomeProd: nomeProd,
      categoria: categoria,
      precoProd: precoProd
    }
  });
}

const editNameProd = async (idProd, nomeProd) => {
  return await prisma.prod.update({
    where: {
      idProd: parseInt(idProd)
    },
    data: {
      nomeProd: nomeProd
    }
  });
}

const deleteProd = async (idProd) => {
  return await prisma.prod.delete({
    where: {
      idProd: parseInt(idProd)
    }
  });
}

export default { getAllProds, getProdById, postProd, editNameProd, deleteProd, editProd }; 