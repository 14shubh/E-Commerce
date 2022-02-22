const pool = require('../util/database_config');
module.exports = class Admin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    checkAdmin() {
        return new Promise((res, rej) => {
            pool.getConnection((err, con) => {
                if (err) {
                    rej();
                } else {
                    let sql = 'select * from admin where email=? and password=?';
                    con.query(sql, [this.email, this.password], (err, result) => {
                        con.release();
                        if (err) {
                            rej(err);
                        } else {
                            res(result);
                        }
                    });
                }
            })
        });
    }
}