import userModel from "../../models/userModel.js";

const editUser = async (req, res) => {
  const { idUser } = req.params;
  const { nameUser, emailUser, pass } = req.body;

  if (!idUser || !nameUser || !emailUser || !pass) {
    return res.status(400).json({ message: 'Todos os campos são necessários' });
  }

  try {
    const updateUser = await userModel.editUser(idUser, nameUser, emailUser, pass);
    if (!updateUser) {
      return res.status(404).json({ message: 'Usuario não encontrado' });
    }

    return res.json({ message: 'Usuario atualizado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar usuario', error: error.message });
  }

}

export default editUser