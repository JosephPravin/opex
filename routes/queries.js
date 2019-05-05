const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "opex",
  password: "postgres",
  port: 5432
});

const getShipment = (req, res, next) => {
  console.log(`Inside getShipment query handler`);
  pool.query("SELECT * FROM shipmentdata", (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(result.rows);
      res.status(200).json(result.rows);
    }
  });
};

const getLoadMaster = (req, res, next) => {
  console.log(`Inside getLoadMaster query handler`);
  pool.query("SELECT * FROM loadmaster", (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(result.rows);
      res.status(200).json(result.rows);
    }
  });
};

const insertConfig = (req, res, next) => {
  console.log(`Inside Insert query handler -- ${req}`);
  pool.query(
    `insert into loadmaster values ( $1,$2,$3,$4,$5,$6,$7,$8)`,
    [
      `${req.table_}`,
      `${req.master_circle}`,
      `${req.parent_circle}`,
      `${req.children_circle}`,
      `${req.parent_size}`,
      `${req.children_size}`,
      `${req.parent_tooltip}`,
      `${req.children_tooltip}`
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result.rows);
        res.render("index", {
          title: "File upload successful",
          subtitle: "Generate chart",
          link: "/chart",
          linktext: "Click here"
        });
      }
    }
  );
};

module.exports = {
  getShipment,
  insertConfig,
  getLoadMaster
};
