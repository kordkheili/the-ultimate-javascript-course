const socialUser = {
  // login props
  email: "mkalireza.ir@gmail.com",
  password: "123456",

  // profile props
  profile: {
    firstName: "Alireza",
    lastname: "Mohammadi",
    getFullName() {
      return `${this.firstName} ${this.lastname}`;
    },
  },

  // user interests props
  interests: {
    hobbies: ["hiking", "reading"],
    favoriteMovies: [
      {
        title: "Interstellar",
        rating: 4.8,
      },
      {
        title: "The Shawshank Redemption",
        rating: 4.5,
      },
    ],
    addMovie(movie) {
      this.favoriteMovies.push(movie);
    },
  },
};

// if (socialUser.profile && socialUser.profile.getFullName) {
//   const fullName = socialUser.profile.getFullName();
//   console.log(fullName);
// }
const fullName = socialUser.profile?.getFullName?.();
console.log(fullName);

const movie = {
  title: "Marmoulak",
  rating: 5,
};
socialUser.interests?.addMovie?.(movie);
console.log(socialUser);
