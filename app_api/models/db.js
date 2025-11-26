var mongoose = require( 'mongoose' );
// var dbURI = 'mongodb://localhost:27017/mekanbul';
var dbURI = 'mongodb+srv://eneskocaslan:bubirdenemesifresi@cluster0.iswsksq.mongodb.net/mekanbul?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connection.on("connected", function(){
    console.log("Mongoose "+ dbURI + " adresindeki veritabanına bağlandı.");
});
mongoose.connection.on("error", function(){
    console.log("Mongoose bağlantı hatası.");
});
mongoose.connection.on("disconnected", function(){
    console.log("Mongoose bağlantısı koptu.");
});
//uygulama kapandığında mongoose bağlantısını kapatma
process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose uygulama sonlandırma nedeniyle bağlantıyı kapattı.");
        process.exit(0);
    });
});
require("./venue"); 