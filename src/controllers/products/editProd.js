import prodModel from "../../models/prodModel.js";

const editProd = async (req, res) => {
  const { idProd } = req.params;
  const { nomeProd, categoria, precoProd } = req.body;

  if (!idProd || !nomeProd || !categoria || !precoProd) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  try {
    const updatedProd = await prodModel.editProd(idProd, nomeProd, categoria, precoProd);
    if (!updatedProd) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    return res.json({ message: 'Produto atualizado com sucesso', updatedProd });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
  }
}

export default editProd;