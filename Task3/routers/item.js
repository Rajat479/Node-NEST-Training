const express = require('express');
const {items: itemDb} = require("./../utils/db")
const router = express.Router();

router.get("/", (req, res)=>{
    res.send({success: true, items: itemDb})
})
router.post("/", (req, res)=>{
    let item = req.body;
    console.log(item)
    let validation = true;
    if(validation){
        itemDb.push({...item, id: itemDb.length + 1});
        res.send({"success": true, "item": item})
    } else {
        res.send({"success": false, "message": "invalid price"})
    }
})
router.put("/update/:id", (req, res)=>{
    let item = req.body;
    let id = req.params['id'];
    let flag = 0;
    for (var i=0; i<itemDb.length; i++){
        if(itemDb[i].id===+id) {
            itemDb[i]=item;
            res.send("Updated");
            flag=1;
        }
    }
    if(flag==0){
        itemDb.push(item);
        res.send("Created");
    } 
})
router.delete("/delete/:id", (req, res)=>{
    let id = req.params['id'];
    let flag = 0;
    for (var i=0; i<itemDb.length; i++){
        if(itemDb[i].id===+id) {
            itemDb.splice(i,1);
            res.send("Deleted");
            flag=1;
            break;
        }
    }
    if(flag==0){
        res.send("ID is invalid Cannot DELETE");
    }

})
router.get("/findById/:id", (req, res)=>{
    let id = req.params['id'];
    let flag = 0;
    for (var i=0; i<itemDb.length; i++){
        if(itemDb[i].id===+id) {
            res.send({"success": true, "item": itemDb[i]})
            flag=1;
            break;
        }
    }
    if(flag==0){
        res.send("ID is invalid Cannot GET");
    }

})
router.get("/findByPrice/:price", (req, res)=>{
    let price = req.params['price'];
    let items = [];
    let flag = 0;
    for (var i=0; i<itemDb.length; i++){
        if(itemDb[i].price===price) {
            items.push(itemDb[i]);
            flag=1;
        }
        res.send({"success": true, "item": items})
    }
    if(flag==0){
        res.send("Doesn't have Cost Can't GET");
    }
})
module.exports = router;