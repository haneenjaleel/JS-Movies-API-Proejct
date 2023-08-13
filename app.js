const popularList=document.getElementById("popular-section");
async function displaypopularList(){
    const movieData=await getMovie();
    movieData.forEach((movie) => {
        const card=document.createElement("div");
        card.textContent=movie.name;
        card.classList.add("movie-card");

        card.addEventListener('click',()=>{
            window.location.href="./index.html",${movie.name};
            popularList.appendChild(card);
        })
    });
}

async function getMovie(){
    try{
        const response=await fetch('https://api.themoviedb.org/3/movie/popular');
        const data=await response.json();
        return data.results;
    }
catch(error) {
    console.log(error);
    return[];
}
};
displaypopularList();
// .........................................




