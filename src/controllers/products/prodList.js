import prodModel from "../../models/prodModel.js"

const prodList = async (req, res) => {
  const prods = await prodModel.getAllProds()
  res.json(prods)
}
export default prodList