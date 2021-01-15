const MySQLConnect = require('mysql');

const MySQL = MySQLConnect.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'autoset',
    database : 'myblogiplist'
});

exports.AddressCheck = function(addres){
    const ClientIpCheck = "SELECT address FROM log_ip WHERE address='"+addres+"'";

    MySQL.query(ClientIpCheck, function(err,rows){

        if (err) throw err;

        if(rows[0] == undefined){
            const MySQLClientIpSQL = "INSERT INTO log_ip (address) VALUES('"+addres+"')";

            MySQL.query(MySQLClientIpSQL, function(err, rows){
                if (err) throw err;
                console.log("Insert Client Ip : "+addres);
            });
        }
    });
}