const express=require("express")
const app=express()
const date=require(__dirname+"/date.js")
const items=["Workout","Eat food","Web Development"]
const workitems=[]
app.set('view engine','ejs')
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/",function(req,res){
const day=date.getDate() ;
res.render("list",{Tittle:day,newitems:items})

})

app.post("/",function(req,res){
    const item=req.body.todo;
       if(req.body.list === "work"){
        workitems.push(item)
        res.redirect("/work")
    }else{
        
        items.push(item)
    res.redirect("/")}
})
app.get("/about",function(req,res){
    res.render("about");
})
app.get("/work",function(req,res){
    res.render("list",{Tittle: "work",newitems:workitems});
    })
app.get("/contact",function(req,res){
    res.render("contact")
})
app.listen(3000)