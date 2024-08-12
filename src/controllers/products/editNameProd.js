import prodModel from "../../models/prodModel.js"

const editNameProd = (req, res) => {
  const { idProd } = req.params;
  const { nameProd } = req.body;

  if (!idProd || !nameProd) {
    return res.status(400).json({ message: 'ID do produto e novo nome são necessários' });
  }
  const updatedProd = prodModel.editNameProd(idProd, nameProd);
  if (!updatedProd) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  return res.json({ message: 'Nome do produto atualizado com sucesso', updatedProd });
}

export default editNameProd;

