const Movie=require('../model/model')

const resolvers={
    movies:async ()=>{
        //for finding all movies in mongodb atlas
        return await Movie.find({})
    },
    movieByName: async (args) => {
        const movie = await Movie.findOne({ name: args.name });
      return movie;
    },
    addMovie:async (args)=>{
        let movie=new Movie({
            name:args.name,
            genre:args.genre,
            year:args.year,
            image:args.image,
            description:args.description,
            favourite: false,
        })
       await movie.save()
        return movie
    },
    toggleFavourite: async (args) => {
        const movie = await Movie.findOne({ name: args.name });
        if (movie) {
            movie.favourite = !movie.favourite;
            await movie.save();
        }
        return movie;
    }
    
}

module.exports=resolvers