import connection from "./config/db.js";
import Cantina from "./models/Cantina.js";
import Aluno from "./models/Aluno.js";
import User from "./models/User.js";

const migrate = async () =>  {
    try {

        const result = await connection.sync();
        console.log(result);
    } catch (error ) {
        console.log(error);
    }
};
migrate();