console.log("Hi there!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("%cDOM Content Loaded and Parsed!", "color: magenta");

  function getExistingUserData() {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((result) => console.log("Users:", result));
    //   .then(console.log); This is the functional programming equivalent of the preceding line
  }

  getExistingUserData();
});
