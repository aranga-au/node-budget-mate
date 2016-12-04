/**
 * Created by aranga on 29/10/2016.
 */
var mysql = require('mysql');
module.exports = function (dbcon) {

    //interface
    var ret = {
        list: list,
        searchByName: searchByName,
        findById: findById,
        insert: insert,
        delete: remove,
        update: update
    };
    return ret;

    //implementations
    function list(callback) {
        var con = dbcon.create();
        con.query("select * from category", function (err, rows) {
            if (err) {
                callback(err, []);
                return;
            }
            callback(err, rows);

        });
        con.end();
    }

    function findById(id, callback) {
        var con = dbcon.create();
        con.query("select * from category where id = " + id, function (err, rows) {
            if (err) {
                callback(err, null);
                return;
            }
            if (rows === null || rows.length === 0) {
                callback(null, null);
                return;
            }
            callback(null, rows[0]);

        });
        con.end();
    }

    function searchByName(name, callback) {
        var con = dbcon.create();

        con.query("select * from category where name like '" + name + "%'", function (err, rows) {

            if (err) {
                callback(err, null);
                return;
            }
            callback(err, rows);

        });
        con.end();
    }

    function insert(category, callback) {
        var con = dbcon.create();

        if (!category || !category.name) {
            callback({"message": "invalid category object"}, null);
            con.end();
            return;
        }
        //remove category id (auto increment)
        if (category.id) {
            delete category.id;
        }
        con.query("INSERT INTO category SET ?", category, function (err, resp) {

            if (err) {

                callback(err, null);
                con.end();
                return;
            }
            console.log("succesful inserted [id:" + resp.insertId + "]");
            category.id = resp.insertId;
            callback(null, category);

        });
        con.end();
    }

    function remove(id, callback) {

        if (id === null || id === 0) {
            callback("id canot be null", null);
            return;
        }
        var con = dbcon.create();
        con.query("DELETE FROM category WHERE id =" + id, function (err, r) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, r);
        });
        con.end();
    }

    function update(category, callback) {

        if (category === null || !category.id) {
            callback('id canot be null', null);
            return;
        }
        var id = category.id;
        delete category.id;
        console.log(category);
        var con = dbcon.create();
        con.query("UPDATE category SET ? WHERE id = " + id, [category], function (err, r) {
            if (err) {
                callback(err, {});
                return;
            }
            category.id = id;
            callback(null, category);
        });
        con.end();
    }
};