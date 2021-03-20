const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const layouts = require('express-ejs-layouts');
const routes = require("./routes")


const app = express();
const PORT = process.env.PORT || 3005;

app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(layouts)
app.use(express.static("public"))

app.use((req,res,next)=>{
    if(req.url === "/favicon.ico"){
        console.log("f that file")
        next()
    }
})


app.use(flash())
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:false
}))


app.use(passport.initialize())
app.use(passport.session());


app.use(routes)

app.use(urlRedirect)




function urlRedirect(req,res,next){
    console.log("made it this far huh? no no no, lets get you back on path");
    return res.redirect('/login');
}



app.listen(PORT,console.log(`Logged onto port ${PORT}, ${process.env.USER}. PID:${process.pid}.`))