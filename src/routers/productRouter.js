import express from "express";
import prodById from "../controllers/products/prodById.js";
import prodList from "../controllers/products/prodList.js";
import createProd from "../controllers/products/createProd.js";
import editProd from "../controllers/products/editProd.js";
import editNameProd from "../controllers/products/editNameProd.js";
import deleteProd from "../controllers/products/deleteProd.js";
const routerProds = express.Router();

routerProds.get('/list', prodList);
routerProds.get('/:id', prodById);
routerProds.post('/', createProd)
routerProds.put('/', editProd)
routerProds.patch('/:idProd', editNameProd)
routerProds.delete('/:idProd', deleteProd)

export default routerProds