const errorHandler = (err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.status(500).json({
      error: "Erro interno no servidor, tente novamente!"
    });
  }
  return
}

export default errorHandler;