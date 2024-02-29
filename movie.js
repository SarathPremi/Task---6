class Movie {
  //Class property rating to "PG" as default when no rating is provided.
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // getPG method returns a new array of only those movies in the input array with a rating of "PG"
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

const movies = [
  new Movie("Movie 1", "Studio A", "PG"),
  new Movie("Inception", "Warner Bros.", "PG-13"),
  new Movie("Movie 3", "Studio C", "PG"),
  new Movie("The Dark Knight", "Warner Bros."),
];

// Calling the getPG method
const pgMovies = Movie.getPG(movies);
console.log(pgMovies); // Output: Array of Movie instances with rating "PG"

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);
