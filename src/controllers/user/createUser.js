import userModel from "../../models/userModel.js";

const createUser = async (req, res) => {
  const { idUser, nameUser, emailUser, pass } = req.body;

  if (!idUser || !nameUser || !emailUser || !pass) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  const newUser = {
    idUser,
    nameUser,
    emailUser,
    pass
  };
  await userModel.postUser(newUser);

  res.status(201).json({ message: 'Usuario adicionado com sucesso', newUser });
}
export default createUser