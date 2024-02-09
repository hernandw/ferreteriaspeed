const pool = require('../config/db')

//consulta de todos los productos
/* const getProducts = async () => {
    const { rows: result } = await pool.query('SELECT * FROM ferreteria')
    return result
} */


//Consulta limitada
const getProducts = async ({ limit = 10}) => {
  const { rows: result } = await pool.query("SELECT * FROM ferreteria LIMIT $1", [limit]);
  return result;
};
module.exports = {
    getProducts
}