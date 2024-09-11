import userModel, { validateUserToCreate, validateUser } from "../../models/userModel.js";

const createUser = async (req, res) => {
  const { nameUser, emailUser, pass } = req.body;

  // if (!nameUser || !emailUser || !pass) {
  //   return res.status(400).json({ message: 'Todos os campos são necessários' });
  // }

  const newUser = {
    nameUser,
    emailUser,
    pass
  };

  const userValidated = validateUser(newUser);

  if (userValidated?.error) {
    return res.status(400).json({
      error: "Erro ao criar usuário, verifique os dados",
      fieldErrors: userValidated.error.flatten().fieldErrors
    });
  }


  const result = await userModel.postUser(userValidated.data);

  // if (!result) {
  //   return res.status(500).json({ message: 'Erro ao adicionar usuário' });
  // } else {
  //   res.status(201).json({ message: 'Usuario adicionado com sucesso', newUser });
  // }

}
export default createUser