import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
    'library_db',
    'postgres',
    'postgres', {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    });

export default sequelize;