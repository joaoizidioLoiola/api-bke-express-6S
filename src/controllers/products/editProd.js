import prodModel from "../../models/prodModel.js";

const editProd = (req, res) => {
  const { idProd } = req.params;
  const { nameProd, categoria } = req.body;

  if (!idProd || !nameProd || !categoria) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  const updatedProd = prodModel.editProd(idProd, { nameProd, categoria });
  if (!updatedProd) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  return res.json({ message: 'Produto atualizado com sucesso', updatedProd });
}

export default editProd;