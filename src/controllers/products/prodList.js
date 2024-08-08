import prodModel from "../../models/prodModel.js"

const prodList = (req, res) => {
  const prods = prodModel.getAllProds()
  res.json(prods)
}
export default prodList