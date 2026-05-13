import sequelize from './db.js';

export async function setupDatabase() {
    sequelize.sync({
        alter: true
    });
}