const Joke = require('../models/jokes.model')


module.exports = {
    //Key value pairs
    //Keys are the names of the functions and values are the functions
    allJokes:(req,res) => {
        Joke.find({})
            .then((allJokes) => {
                res.json(allJokes)
            })
            .catch((err)=> {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    getOneJoke: (req,res)=>{
        Joke.findOne({_id:req.params.id})
            .then((oneJoke)=> {
                res.json(oneJoke)
            })
            .catch((err)=>{res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    createJoke:(req,res) => {
        Joke.create(req.body)
            .then((newJoke)=>{
                res.json(newJoke)
            })
            .catch((err)=>{res.status(500).json({message: 'Something went wrong', error:err})
            })
    },
    updateJoke:(req,res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedJoke => {
                res.json({ joke: updatedJoke })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },
    deleteJoke:(req,res) => {
        Joke.deleteOne({_id:req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    }
}