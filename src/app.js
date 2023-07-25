const express = require("express");
require("./db/conn");
const Student = require("./models/students");  

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// create a new student

// app.post("/students", (req , res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.send(user);
//     }).catch((e) => {
//         res.send(e);
//     })

//     // res.send("hello from the other side");
// })

app.post("/students" , async(req , res) => {

    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e) {
        res.status(400).send(e);
    }

})

// read the data of register student
app.get("/students" , async(req , res) => {

    try {
        const studentData = await Student.find();
        res.send(studentData);
    }catch(e) {
        res.send(e);
    }
})

// get individual students data 
app.get("/students/:name", async(req,res) => {

    try{
        const _name = req.params.name;
        const dataname = await Student.findOne({name : _name});
        console.log(dataname);
        console.log(_name);
        res.status(200).send(dataname);

    }catch(e) {
        res.status(400).send(e);
    }
})

// update the students by id
app.patch("/students/:id" , async(req,res) => {

    try{
        const _id = req.params.id 
        const updateStudent = await Student.findByIdAndUpdate(_id , req.body)
        res.send(updateStudent);
    }catch(e) {
        res.status(404).send(e);
    }
})

// delete the students by id
// app.delete("/students/:id" , async(req , res) => {

//     try {
//         const deleteStudent = await Student.findByIdAndUpdate(req.params.id);
//         if(!req.params.id) {
//             return res.status(400).send();
//         }
//         res.send(deleteStudent);
//     }catch(e) {
//         res.status(500).send(e);
//     }
// })


// app.delete("/students/:id", async(req, res) => {

//     try {

//         const _id = req.params.id;

//        const result = await Student.findByIdAndDelete(_id);

//        res.send(result);

//     } catch (error) {

//         res.send(error);

//     }

// })

app.listen(port , () => {
    console.log("server started");
});