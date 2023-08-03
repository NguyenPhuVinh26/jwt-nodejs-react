import bcrypt from 'bcryptjs';
import mysql from 'mysql2';
const salt = bcrypt.genSaltSync(10);
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});


const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hasPass = hashUserPassword(password);
    connection.query(
        'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hasPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    );

}

const getUserLish = () => {
    let user = [];
    connection.query(
        'Select * from users',
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
            console.log("check result", results);
        }
    );
}

module.exports = {
    createNewUser,
    getUserLish
}