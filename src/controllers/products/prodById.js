import prodModel from "../../models/prodModel.js"

const prodById = async (req, res) => {
  const { id } = req.params;
  try {
    const prod = await prodModel.getProdById(id);
    if (!prod) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(prod);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export default prodById;
