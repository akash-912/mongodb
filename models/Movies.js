import mongoose from "mongoose";

// Define Schema

const movieSchema = new mongoose.Schema({
  name: {type:String,required:true, trim: true},
  ratings: {type: Number,required:true,min:1,max:5},
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: v => v => 10,
  },
  genre: {type:Array},
  isActive: {type:Boolean},
  comments: [{value: {type:String},published: {type: Date, default: Date.now}}],
})

// Creating model


const MovieModel = mongoose.model('Movie',movieSchema);


const insertManyDoc = async () => {
  try{
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ['action','adventure'],
      isActive: true,
      comments: [{value: "That was an amazing movie."}],
    });
    const m2 = new MovieModel({
      name: "Ansh",
      ratings: 5,
      money: 50000,
      genre: ['adventure'],
      isActive: true,
      comments: [{value: "That no my was an amazing movie."}],
    })
    const m3 = new MovieModel({
      name: "Extraction 3",
      ratings: 4,
      money: 60000,
      genre: ['action','adventure'],
      isActive: true,
      comments: [{value: "That was an amazing movie."}],
    })
    const m4 = new MovieModel({
      name: "Ansh 2",
      ratings: 2,
      money: 1110000,
      genre: ['action','adventure','comedy'],
      isActive: true,
      comments: [{value: "That was crazy movie."}],
    })
    
    const result = await MovieModel.insertMany([m1,m2,m3,m4]);
    console.log(result)
  }catch(error){
    console.log(error)
  }
}


export {insertManyDoc};