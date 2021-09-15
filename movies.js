

const baseUrl = `http://www.omdbapi.com/?apikey=24649845&s=`;

async function movie() {
  const searchTitle = document.getElementById("name").value;

  console.log(searchTitle);

  const movies = await fetch(`${baseUrl}${searchTitle}`).then((response) =>
    response.json()
  );

  console.log(movies.Search[0].Title, "within first function");

  render(movies);
  return movies;
}

function render(movies) {
  console.log(movies.Search, "one movie");
  const results = movies.Search;

  results.forEach((element) => {
    console.log(element.Title);
    const titles = element.Title;
    const year = element.Year;

    $("#results").append(
      `<h3>${titles}, ${year}</h3>`,
      `<img src=${element.Poster}>`
    );
  });
}
