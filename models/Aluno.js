import Sequelize from 'sequelize';
import connection from '../config/db.js';
import bcrypt from 'bcrypt';

const Aluno = connection.define(
    'aluno',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async(aluno) => {
                if(aluno.password){
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    aluno.password = bcrypt.hashSync(aluno.password, salt);
                }
            },
            beforeUpdate: async(aluno) => {
                if(aluno.password){
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    aluno.password = bcrypt.hashSync(aluno.password, salt);
                }
            }
        }
    }
);

export default Aluno;