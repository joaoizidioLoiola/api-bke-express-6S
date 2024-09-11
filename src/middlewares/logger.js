const logger = (req, res, next) => {
  const now = new Date();
  const yyyy = Notification.getFullYear();
  const mm = now.getMonth() + 1;
  const dd = now.getDate();
  console.log(`${dd}/${mm}/${yyyy} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} - ${req.method} ${req.url}`);
  next();
}

export default logger;