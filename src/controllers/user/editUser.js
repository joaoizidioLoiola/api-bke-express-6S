import userModel, { validateUserToCreate as ValidateUserToUpdate } from "../../models/userModel.js";

const editUser = async (req, res) => {
  const { id } = req.params;
  const { nameUser, emailUser, pass } = req.body;

<<<<<<< HEAD
  if (!id || !nameUser || !emailUser || !pass) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  try {
    const updateUser = await userModel.editUser(id, nameUser, emailUser, pass);
    if (!updateUser) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
=======
  // if (!idUser || !nameUser || !emailUser || !pass) {
  //   return res.status(400).json({ message: 'Todos os campos são necessários' });
  // }

  try {
    const updateUser = await userModel.editUser(idUser, nameUser, emailUser, pass);
    const userValidade = ValidateUserToUpdate(updateUser);

    if (userValidade?.error) {
      return res.status(400).json({
        error: "Erro ao atualizar usuário, verifique os dados",
        fieldErrors: userValidade.error.flatten().fieldErrors
      });
>>>>>>> f84a56aac7a1d7dad7da184b416d800fc2fbb7dc
    }


    // if (!updateUser) {
    //   return res.status(404).json({ message: 'Usuario não encontrado' });
    // }
    return res.json({ message: 'Usuario atualizado com sucesso' });

  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar usuario', error: error.message });
  }

}

export default editUser