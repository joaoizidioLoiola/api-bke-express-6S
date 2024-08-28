import userModel from "../../models/userModel.js";

const createUser = async (req, res) => {
  const { nameUser, emailUser, pass } = req.body;

  if (!nameUser || !emailUser || !pass) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  const newUser = {
    nameUser,
    emailUser,
    pass
  };
  await userModel.postUser(newUser);

  res.status(201).json({ message: 'Usuario adicionado com sucesso', newUser });
}
export default createUser