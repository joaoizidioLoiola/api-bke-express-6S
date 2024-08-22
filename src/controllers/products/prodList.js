import prodModel from "../../models/prodModel.js"

const prodList = async (req, res) => {
  const prods = await prodModel.getAllProds()
  if (!prods) {
    return res.status(404).json({ error: 'Lista de Produtos vazia' });
  }
  res.json(prods)
}
export default prodList