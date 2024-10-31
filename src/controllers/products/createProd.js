import prodModel from "../../models/prodModel.js";

const createProd = async (req, res) => {
  const { nomeProd, categoria, precoProd } = req.body;

  if (!nomeProd || !categoria || !precoProd) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }
  const newProd = {
    nomeProd,
    categoria,
    precoProd
  };

  await prodModel.postProd(newProd);

  res.status(201).json({ message: 'Produto adicionado com sucesso', newProd });
}
export default createProd