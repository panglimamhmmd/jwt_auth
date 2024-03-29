import { Sequelize } from 'sequelize';

const db = new Sequelize('auth_db', 'root', '', {
    host: 'localhost', //! kalau deploy gimana?,
    dialect: 'mysql',
});

export default db;
