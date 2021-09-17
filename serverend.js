const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const hostname = '127.0.0.5'
const port =800
app.get("/",(req,res)=>{
    const home = fs.readFile('./Boston_dynamics.html',null,function(error, data){
        if(error){
            res.status(404);
        }
        else
        {
            res.write(data);
        }
        res.send();
    });
});
app.get("/products",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/products')
});
app.get("/solutions",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/solutions')
});
app.get("/resources",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/spot/resources')
});
app.get("/company",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/about')
});
app.get("/spot",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/spot')
});
app.get("/arm",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/spot-arm')
});
app.get("/payloads",(req,res)=>{
    res.status(200).redirect('https://shop.bostondynamics.com/ccrz__ProductList?categoryId=aCq6g00000000tWCAQ&cclcl=en_US')
});
app.get("/stretch",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/stretch')
});
app.get("/pick",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/pick')
});
app.get("/inspection",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/solutions/inspection')
});
app.get("/construction",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/solutions/construction')
});
app.get("/utilities",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/solutions/utilities')
});
app.get("/warehouse",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/solutions/warehouse-automation')
});
app.get("/studies",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/resources/case-studies')
});
app.get("/webinars",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/resources/webinars')
});
app.get("/blog",(req,res)=>{
    res.status(200).redirect('https://blog.bostondynamics.com/')
});
app.get("/support",(req,res)=>{
    res.status(200).redirect('https://support.bostondynamics.com/s/')
});
app.get("/documentation",(req,res)=>{
    res.status(200).redirect('https://dev.bostondynamics.com/')
});
app.get("/about",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/about')
});
app.get("/careers",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/careers')
});
app.get("/news",(req,res)=>{
    res.status(200).redirect('https://www.bostondynamics.com/news')
});
app.listen(port,hostname,()=>{
    console.log(`Application successfully started on port http://${hostname}:${port}/`);
})