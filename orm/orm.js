const connection = require("../connections/connection.js");



module.exports = {

    getUsers(cb){
        connection.query("SELECT * FROM smoker",(err,content)=>{
            if(err)throw err;
            console.log(content);
             cb(content);
        })
    },

    addUser(user){
        connection.query("INSERT INTO smoker SET ?",user,(err,content)=>{
            if(err)throw err;
            console.log("smoker was added.");
            return {msg:"smoker was added"}
        })
    },

    adjustBalance(smoker,price,weed){
        connection.query("SELECT * FROM smoker WHERE ?",{username:smoker},(err,dbuser)=>{
            if(err)throw err;
            console.log(dbuser);
            let newBalance = dbuser.balance - price;


            connection.query("SELECT * FROM weed WHERE ?",{weedname:weed},(err,dbweed)=>{
                if(err)throw err;
                console.log(dbweed);
                let newQuantity = dbweed.quantity--;
        connection.query("UPDATE smoker WHERE ? SET ?",[{username:smoker},{balance:newBalance}],(error,content)=>{
            if(error)throw error;
            console.log("balance was updated.");
       
        

        connection.query("UPDATE weed WHERE ? SET ?",[{weedname:weed},{quantity:newQuantity}],(error,content)=>{
            if(error)throw error;
            console.log("quantity was updated.");
            return {msg:"successful update,we think"}
        })
    })
})
        })
    },


    getWeeds(cb){
        console.log('getWeeds fired')
     
        connection.query("SELECT * FROM weed",(err,content)=>{
            if(err){
                console.log('wtf??')
            }
            console.log(content);
            cb(content);
        })
    },

    addWeed(weed){
        connection.query("INSERT INTO weed SET ?",weed,(err,content)=>{
            if(err)throw err;
            console.log("weed was added.");
            return {msg:"weed was added"}
        })
    },


    rollWeed(id){
            connection.query("UPDATE weed SET ? WHERE ?",[{rolled:true},{id}],(err)=>{
                if(err)throw err;
                console.log('weed was updated')
            })
    },

    smokeWeed(id){
        connection.query("DELETE FROM weed WHERE ?",{id},(err)=>{
            if(err)throw err;
            console.log('weed was smooooooked')
        })
}

    
}