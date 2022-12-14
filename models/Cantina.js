import Sequelize  from "sequelize";

import connection from "../config/db.js";

const Cantina = connection.define(
    'cantina',
    {
       id:{
           type: Sequelize.INTEGER,
           autoIncrement: true,
           allowNull: false,
           primaryKey: true
       },
       idUser:{
           type: Sequelize.INTEGER,
           allowNull:false,
           references:{
            model:'users',
            key:'id'
           }
       },
   
       idRestaurant:{
           type: Sequelize.INTEGER,
           allowNull:false,
           references:{
            model:'restaurants',
            key:'id'
           }
       },
       Comment:{
           type: Sequelize.STRING,
           allowNull:false
       },
       stars:{
           type: Sequelize.INTEGER,
           allowNull:false
       }
   }

);
export default Cantina;