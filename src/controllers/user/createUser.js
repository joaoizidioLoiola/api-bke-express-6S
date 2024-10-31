import userModel, { validateUserToCreate } from "../../models/userModel.js";
import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt"

const createUser = async (req, res) => {
  const { name, email, pass } = req.body;

  // if (!nameUser || !emailUser || !pass) {
  //   return res.status(400).json({ message: 'Todos os campos são necessários' });
  // }

  const newUser = {
    name,
    email,
    pass
  };

  const userValidated = validateUserToCreate(newUser);
  userValidated.data.public_Id = uuid()
  userValidated.data.pass = bcrypt.hashSync(userValidated.data.pass, 10)

  console.log(userValidated);

  if (userValidated?.error) {
    return res.status(400).json({
      error: "Erro ao criar usuário, verifique os dados",
      message: userValidated.error.flatten().fieldErrors
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