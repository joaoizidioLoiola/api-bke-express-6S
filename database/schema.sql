CREATE TABLE IF NOT EXISTS `api_express`.`user` (
  `id` INT NOT NULL,
  `userName` VARCHAR(45) COLLATE 'utf8mb3_general_mysql500_ci' NOT NULL,
  `emailUser` VARCHAR(45) COLLATE 'utf8mb3_general_mysql500_ci' NOT NULL,
  `passUser` VARCHAR(45) COLLATE 'utf8mb3_general_mysql500_ci' NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `emailUser_UNIQUE` (`emailUser` ASC) VISIBLE,
  UNIQUE INDEX `passUser_UNIQUE` (`passUser` ASC) VISIBLE
) ENGINE = InnoDB