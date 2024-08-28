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

  const result = await userModel.postUser(newUser);

  if (!result) {
    return res.status(500).json({ message: 'Erro ao adicionar usuário' });
  } else {
    res.status(201).json({ message: 'Usuario adicionado com sucesso', newUser });
  }

}
export default createUser