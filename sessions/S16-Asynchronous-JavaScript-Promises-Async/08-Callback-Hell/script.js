setTimeout(() => {
  console.log("1st operation completed");
  setTimeout(() => {
    console.log("2nd operation completed");
    setTimeout(() => {
      console.log("3rd operation completed");
      setTimeout(() => {
        console.log("4th operation completed");
        setTimeout(() => {
          console.log("5th operation completed");
          //! Callback Hell
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
