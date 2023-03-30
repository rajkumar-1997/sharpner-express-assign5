const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')

const app=express();
app.use(express.static(path.join(__dirname,'public')));

const adminRoutes=require('./route/admin.js');
const shopRoutes=require('./route/shop.js');
const contactRoutes=require('./route/contact.js');
const successRoutes=require('./route/success.js');


app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);




app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})




app.listen(3000,()=>{
    console.log('server started at port 3000');
})