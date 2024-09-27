const admin = require("firebase-admin");
const keys=require("../keys.json");


admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const bd=admin.firestore();
const usuarios=bd.collection("ejemplodb");
const productos=bd.collection("productos");

module.exports={
usuarios,
productos
}

//console.log(usuarios);