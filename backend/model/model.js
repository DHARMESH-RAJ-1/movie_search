const mongoose =require('mongoose')
const movieSchema=new mongoose.Schema({
    name:String,
    genre:String,
    year:String,
    image:String,
    description:String,
    favourites:Boolean,
})

module.exports=new mongoose.model('Movie',movieSchema)