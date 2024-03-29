const url = "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&sort_by=popularity.desc"


//create input for serach
const search = document.getElementById("searchTask")
const input = document.createElement("input") 
search.append(input)      
input.id = "input"
input.placeholder = "Search Film.."

//input onchange
const isim = document.querySelector("input")
isim.addEventListener("change",searchMovie);
let films = []

       
//get movies from api
const getMovies = (url) => {
    fetch(url).then(response => {
    return response.clone().json();
    }).then(data => {

    films = data.results
    console.log(films)
    films.forEach((film, index) => {
                       
        //created span for img,title,imdb,date
        const div = document.createElement("span")
        const label1 = document.createElement("h4")
        const label2 = document.createElement("label")
        const label3 = document.createElement("h5")
        const img = document.createElement("img")
        
        const ic_eklenen = document.getElementById("ic-div")
        const dis_div = document.getElementById("dis-div")
    
        label1.innerText = `${film.title}` 
        label2.innerText = `${film.vote_average}`

        if(parseInt(label2.innerText) < 6){
            label2.style="color:red"
        }else if(parseInt(label2.innerText)>5 && parseInt(label2.innerText) < 7){
            label2.style="color:purple"
        }else{
            label2.style="color:green"
        }
        //get date for year
        let dates = (film.release_date).split("-")
        let year = dates[0]
        label3.innerHTML = year              
        img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`
            
        ic_eklenen.appendChild(div)
        div.append(img,label1,label2,label3)
               
    })  
})
}
//calling getMovies fetch      
getMovies(url)

//this function created for search movie
function searchMovie(){
    document.getElementById("ic-div").innerHTML = ""

    films.forEach((film, index) => {
        //if input is change 
    if(film.title == document.getElementById("input").value){
        const div = document.createElement("span")
        const label1 = document.createElement("h4")
        const label2 = document.createElement("label")
        const label3 = document.createElement("h5")
        const img = document.createElement("img")
        const ic_eklenen = document.getElementById("ic-div")
        label1.innerText = `${film.title}` 
        label2.innerText = `${film.vote_average}`
        //change color for imdb
        if(parseInt(label2.innerText) < 6){
            label2.style="color:red"
        }else if(parseInt(label2.innerText)>5 && parseInt(label2.innerText) < 7){
            label2.style="color:purple"
        }else{
            label2.style="color:green"
        }
        let dates = (film.release_date).split("-")
        let year = dates[0]
        label3.innerHTML = year                                 
        img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`           
        ic_eklenen.appendChild(div)          

        return div.append(img,label1,label2,label3) 
    }
    else if(document.getElementById("input").value == ""){
        document.getElementById("ic-div").innerHTML = ""
        films.forEach((film, index) => {
            const div = document.createElement("span")
            const label1 = document.createElement("h4")
            const label2 = document.createElement("label")
            const label3 = document.createElement("h5")
            const img = document.createElement("img")
            const ic_eklenen = document.getElementById("ic-div")
            label1.innerText = `${film.title}` 
            label2.innerText = `${film.vote_average}`
            if(parseInt(label2.innerText) < 6){
                label2.style="color:red"
            }else if(parseInt(label2.innerText)>5 && parseInt(label2.innerText) < 7){
                label2.style="color:purple"
            }else{
                label2.style="color:green"
            }
            let dates = (film.release_date).split("-")
            let year = dates[0]
            label3.innerHTML = year                       
            img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`           
            ic_eklenen.appendChild(div)
        
            return div.append(img,label1,label2,label3)                 
        })
    }
    })                                    
}
