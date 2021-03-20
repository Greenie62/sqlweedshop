const router = require('express').Router();
const passport = require("passport")
const orm = require('../orm/orm.js')



require('../passport-local')(passport)

router.get("/",(req,res)=>{
    res.redirect("/login")
})



router.get("/login",(req,res)=>{
    res.render("login")
})


router.get("/dashboard",(req,res)=>{
    orm.getWeeds((weeds)=>{
        console.log("weeds")
        let indica = weeds.filter(w=>w.is_indica === true)
        let sativa = weeds.filter(w=>w.is_indica !== true)
    
    res.render("dashboard",{indica,sativa,weeds})

    })
})


router.post('/login',passport.authenticate("local",{
    successRedirect:"/dashboard",
    failureFlash:true,
    failureRedirect:"/login"
}))


router.post("/addweed",(req,res)=>{
    console.log(req.body);
    req.body.is_indica = req.body.is_indica === "on" ? true : false
    orm.addWeed(req.body)
    res.redirect('/dashboard')
})


router.get('/rollweed/:id',(req,res)=>{
    orm.rollWeed(req.params.id);
    res.json({msg:"weed updated!"})
})



router.get('/smokeweed/:id',(req,res)=>{
    orm.smokeWeed(req.params.id);
    res.json({msg:"weed smoked!"})
})


module.exports = router;