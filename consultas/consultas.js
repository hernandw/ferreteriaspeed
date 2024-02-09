const pool = require("../config/db");
const format = require("pg-format");

//consulta de todos los productos
/* const getProducts = async () => {
    const { rows: result } = await pool.query('SELECT * FROM ferreteria')
    return result
} */

//Consulta limitada
const getProducts = async ({ limit = 10 }) => {
  const { rows: result } = await pool.query(
    "SELECT * FROM ferreteria LIMIT $1",
    [limit]
  );
  return result;
};

//consulta de un producto ordenando por nombre descendente

const getProductsOrder = async ({ limit = 10, order_by = "precio_DESC" }) => {
  const [campo, direccion] = order_by.split("_");
  const formatQuery = format(
    "Select * FROM ferreteria ORDER BY %s %s LIMIT %s",
    campo,
    direccion,
    limit
    );
    const { rows: result } = await pool.query(formatQuery);
    return result
};

//Paginacion de resultados
/* const getProductPaginacion = async ({ limit = 10, page= 0, order_by = "nombre_DESC"}) => {
    const [campo, direccion] = order_by.split("_");
    const offset = page * limit
    const formatQuery = format(
        "Select * FROM ferreteria ORDER BY %s %s LIMIT %s OFFSET %s", campo, direccion, limit, offset
    )
    const { rows: result } = await pool.query(formatQuery)
    return result
} */


const getProductPaginacion = async ({
  limit = 10,
  page = 1,
  order_by = "nombre_DESC",
}) => {
  const [campo, direccion] = order_by.split("_");
  const offset = (page -1) * limit;
  const formatQuery = format(
    "Select * FROM ferreteria ORDER BY %s %s LIMIT %s OFFSET %s",
    campo,
    direccion,
    limit,
    offset
  );
  const { rows: result } = await pool.query(formatQuery);
  return result;
};

module.exports = {
  getProducts,
  getProductsOrder,
  getProductPaginacion,
};
