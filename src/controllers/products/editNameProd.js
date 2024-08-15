import prodModel from "../../models/prodModel.js"

const editNameProd = async (req, res) => {
  const { idProd } = req.params;
  const { nomeProd } = req.body;

  if (!idProd || !nomeProd) {
    return res.status(400).json({ message: 'ID do produto e novo nome são necessários' });
  }
  const updatedProd = await prodModel.editNameProd(idProd, nomeProd);
  if (!updatedProd) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  return res.json({ message: 'Nome do produto atualizado com sucesso', updatedProd });
}

export default editNameProd;

