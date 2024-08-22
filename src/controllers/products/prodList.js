import prodModel from "../../models/prodModel.js"

const prodList = async (req, res) => {
  const prods = await prodModel.getAllProds()
  if (prods == null) {
    return res.status(404).json({ message: 'Lista de Produtos vazia' });
  }
  res.json(prods)
}
export default prodList