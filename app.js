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

  const newUserForm = document.getElementById("add-new-user");

  newUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newUserForm);
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          name: name,
          username: username,
          email: email,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then(console.log);
  });
});
