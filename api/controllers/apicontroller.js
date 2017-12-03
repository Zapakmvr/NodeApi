'use strict';
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('testdb.db');
exports.gettest =function(req, res) {
    var products=[];
    db.all("SELECT Code,Name,Description  FROM Product", [], function(err,rows) {
        if(rows == undefined) return products;
        rows.forEach(row => {
            
            var so= new Object();
            so.Name = row.Name;
            so.Code = row.Code;    
            so.Description = row.Description;
            products.push(so);
        });
        res.json(products);
     });
    
};
 