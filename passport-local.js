const LocalStrategy = require('passport-local').Strategy;
const orm = require("./orm/orm.js")



module.exports = function(passport){


    function authUser(username,pw,done){
        console.log(username,pw);

        if(username !== "brat"){
            return done(null,false,{message:"Your not brat!"})
        }

        if(pw !== "booba"){
            return done(null,false,{message:"Bad password!"})
        }
        return done(null,{username,pw})
    }

    passport.use(new LocalStrategy({usernameField:"username"},authUser))
    passport.serializeUser((user,done)=>done(null,user))
    passport.deserializeUser((user,done)=>done(null,user));

}