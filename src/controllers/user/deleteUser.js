import userModel from "../../models/userModel.js";

const deleteUser = (req, res) => {
  const { idUser } = req.params;

  const user = userModel.getUserById(idUser);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  userModel.deleteUser(idUser);
  res.status(200).json({ message: "Usuario deletado com sucesso" });

}
export default deleteUser;