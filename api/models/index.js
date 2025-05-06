import dbConfig from "../config/db.config.js";
import { Sequelize } from "sequelize";     
import User from  "./User.js"; 




const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
            evict: dbConfig.pool.evict
        },
    }
);


const db = {};
db.Sequelize = Sequelize;   
db.sequelize = sequelize;

db.User = User(sequelize, Sequelize);

export default db;
