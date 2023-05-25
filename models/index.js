import dbConfig from "../config/dbconfig.js";
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    }
  },
);

sequelize.authenticate()
.then(() => {
  console.log('connected');
})
.catch((err) => {
  console.log('got pb' + err);
});




