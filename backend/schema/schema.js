const {buildSchema}=require('graphql')

const movieSchema=buildSchema(`
    type Query {
     movies: [Movie]
     movieByName(name: String!): Movie
   }
    type Mutation{
      addMovie(name: String!,genre:String!,year:String!,image:String!,description:String!):Movie
      toggleFavourite(name: String!): Movie
    }  
    type Movie{
      name:String
      genre:String
      year:String
      image:String
      description:String
      favourite: Boolean
    }  
    `)

    module.exports=movieSchema