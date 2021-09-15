console.log('hi')

const baseUrl = `http://www.omdbapi.com/?apikey=24649845&s=`


async function movie(){

   const searchTitle = document.getElementById('name').value
 
  console.log(searchTitle)
   
 const movies = await fetch(`${baseUrl}${searchTitle}`).then(response => response.json())


console.log(movies.Search[0].Title,'within first function')

render(movies)
return movies


}



function render(movies){

 //console.log(movies.Search, 'this is the information being passed in')
console.log(movies.Search, 'one movie')
 const results = movies.Search
//  let allTitles = []
 results.forEach(element => {
    // document.getElementById('results') .appendChild()
    // let list = document.createElement('li').appendChild()
    console.log(element.Title)
    const titles = element.Title
    const year = element.Year
  
    // allTitles.push(titles)

   
    //  document.getElementById('results').textContent = `<ol><li>${titles}</li></ol>`
    // document.getElementById('results').insertAdjacentHTML('beforeend',`<ol><li>${element.Year}</li></ol>`)
     //$('#results').html(allTitles)
    $('#results').append(`<li>${titles}${year}</li>`, `<img src=${element.Poster}>`)

    //  console.log(year)
    // console.log(allTitles)
 });

//  $('#results').append(`<ol><li>${results}</li></ol>`);
}

