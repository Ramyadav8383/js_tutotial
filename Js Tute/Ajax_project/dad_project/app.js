const url = "https://icanhazdadjoke.com/";
// console.log(url);

const btn = document.querySelector(".btn");
const results = document.querySelector(".result");
// console.log(btn);
// console.log(results);

btn.addEventListener("click", async () => {
  fetchDadJokes();
  // console.log("hemlo btn");
  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   displayItems(data);
  // } catch (error) {
  //   console.log(error);
  // }
});

// fetch function
const fetchDadJokes = async () => {
  // loading
  results.textContent = "Loading...";
  // try catch
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    // console.log(response);
    if (!response.ok) {
      // console.log("there was an error");
      throw new Error("error...");
    }
    const data = await response.json();
    console.log(data);
    results.textContent = data.joke;
  } catch (error) {
    results.textContent = "there was an error";
  }
};
fetchDadJokes();
