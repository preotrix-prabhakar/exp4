const express=require("express");

const app=express();

app.use(express.json());
const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
const items=[
    {nam:"already created",id:1},
    {nam:"alreaaaady created 2nd",id:2},
    {nam:"alreaaaady created 3rd",id:3},
    {nam:"alreaaaady created 4th",id:4},
    {nam:"alreaaaady created",id:5},
    
];

app.post("/items",(req,res)=>{
    const item=req.body;
    item.id=items.length+1;
    items.push(item);
    res.status(201).json(item);
});
app.get("/items",(req,res)=>{
    res.send(items);
});
app.get("/:items/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const item=items.find((i)=>i.id===id);
    if(item)
    res.send(item);
else
res.status(404).json({messsage:"item not found"});
});

app.put("/items/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const updatedItem=req.body;
    const index=items.findIndex((i)=>i.id===id);
    if(index!==-1){
        updatedItem.id=id;
        items[index]=updatedItem
        res.json(updatedItem);
    }
    else{
res.status(404).json({messsage:"item not found"});

    }
})