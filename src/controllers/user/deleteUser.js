import userModel from "../../models/userModel.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = userModel.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  await userModel.deleteUser(id);
  res.status(200).json({ message: "Usuario deletado com sucesso" });

}
export default deleteUser;