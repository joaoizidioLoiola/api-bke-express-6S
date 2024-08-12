import prodModel from "../../models/prodModel.js"

const createProd = (req, res) => {
  const { idProd, nameProd, categoria } = req.body;

  if (!idProd || !nameProd || !categoria) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  const newProd = {
    idProd,
    nameProd,
    categoria
  };
  prodModel.postProd(newProd);

  res.status(201).json({ message: 'Produto adicionado com sucesso', newProd });
}
export default createProd