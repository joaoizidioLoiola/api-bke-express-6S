import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let prods = [
  {
    idProd: 12,
    nameProd: "CocaCola",
    categoria: "Refigerante"
  },
  {
    idProd: 10,
    nameProd: "Rum",
    categoria: "Bebida Alcóolica"
  }
];

const getAllProds = async () => {
  const prods = await prisma.prods.findMany({
    select: {
      idProd: true,
      nameProd: true,
      categoria: true
    }
  })
  return prods;
}

const getProdById = (idProd) => {
  return prods.find(prod => prod.idProd === parseInt(idProd));
}

const postProd = (newProd) => {
  prods.push(newProd);
}

const editProd = (idProd) => {
  const index = prods.findIndex(prod => prod.idProd === parseInt(idProd));
}

const editNameProd = (idProd, nameProd) => {
  const prod = getProdById(idProd);
  if (prod) {
    prod.nameProd = nameProd;
  }
  return prod;
}

const deleteProd = (idProd) => {
  prods = prods.filter(prod => prod.idProd !== parseInt(idProd));
}

export default { getAllProds, getProdById, postProd, editNameProd, deleteProd, editProd }; 