import express from "express";

const app = express();

app.use(express.json());

const students = [];
// GET /students
app.get('/students', (req, res) => {
    res.json(students)
})
// POST /student 
app.post('/student', (req, res) => {
    const obj = {
        'name': req.body.name,
        'email': req.body.email,
        'roll': req.body.roll,

    }
    students.push(obj);
    res.json({
        succces: true,
        message: "Student added Successfully",
        data: obj
    });
})

// GET /student?email=email 
app.get('/student', (req, res) => {
    const email = req.query.email;

    const student = students.map((s) => {
        if( s.email === email){
            return s;
        }
    })

    res.json({
        succces: true,
        data: student
    })
})

app.listen(5000, () => {
    console.log("5000 on bord");
});