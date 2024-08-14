import userModel from "../../models/userModel.js";

const createUser = (req, res) => {
  const { idUser, nameUser, emailUser } = req.body;

  if (!idUser || !nameUser || !emailUser) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  const newUser = {
    idUser,
    nameUser,
    emailUser
  };
  userModel.postUser(newUser);

  res.status(201).json({ message: 'Usuario adicionado com sucesso', newUser });
}
export default createUser