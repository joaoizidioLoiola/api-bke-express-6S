import prodModel from "../../models/prodModel.js";

const deleteProd = async (req, res) => {

  const { idProd } = req.params;

  const prod = await prodModel.getProdById(idProd);
  if (!prod) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }
  prodModel.deleteProd(idProd);
  res.status(200).json({ message: "Produto deletado com sucesso" });

}
export default deleteProd