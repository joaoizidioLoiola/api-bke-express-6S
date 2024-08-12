import prodModel from "../../models/prodModel.js"

const prodById = (req, res) => {
  const { id } = req.params;
  const prod = prodModel.getProdById(id)
  if (!prod) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(prod);
}

export default prodById;
