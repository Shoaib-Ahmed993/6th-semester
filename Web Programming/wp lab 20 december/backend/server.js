const express = require('express');
const mongoose = require('mongoose')
const Todo = require('./schemas/todoSchema')
const app = express();
const port = 3000;

app.use(express.json())


// function to connect to database
const connectDatabase = async () => {


  try {
      
    const connect = await mongoose.connect('mongodb://localhost:27017/mydatabase');

    const {host , port} = connect.connection

    console.log(`mongodb connected successfully at port ${port} and host ${host} `)
  
  }
  catch (err) {
     console.log(err)
  }
  

   
}

 
// function calling

connectDatabase()



// route for posting

app.post('/', async (req, res) => {
  
  try {
      
    const todo = new Todo  ({
      title: req.body.title,
      text: req.body.text
    }
) 
    const postTodo = await todo.save()
    res.status(200).json(postTodo)
    

  }
  catch (err) {
     console.log(err)
  }
  
})


// route for delete


app.delete('/:id', async (req, res) => {
  
  try {
      
     await Todo.findByIdAndDelete(req.params.id)

    res.status(200).json(`todo of id ${req.params.id} deleted successfully`)
    

  }
  catch (err) {
     console.log(err)
  }
  
})


// route to get all todos

app.get('/', async (req, res) => {
  
  try {
      
     const todos =    await Todo.find()

    res.status(200).json(todos)
    

  }
  catch (err) {
     console.log(err)
  }
  
})

// route to update todos

app.post('/:id', async (req, res) => {
  
  try {
      
    const todo = await Todo.findById(req.params.id)
    
    
        
      todo.title = req.body.title || todo.title,
      todo.text = req.body.text || todo.text
    
    const updatedTodo = await todo.save()

    res.status(200).json(updatedTodo)

    
    
  
    

  }
  catch (err) {
     console.log(err)
  }
  
})



app.listen(port, console.log(`server is running at port ${port}`));
