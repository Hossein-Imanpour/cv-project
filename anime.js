const $ = document;
const params = new URLSearchParams(window.location.search);
const animeId = params.get('animeId');
// console.log(animeId);

const dataFetch = async () =>{
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`)
    const data = await res.json()
    // renderFetch(data)
    console.log(data);
    const {title, image , type , genres , description , status} = data;
    // console.log(title);
    const box = $.querySelector(".box");
    let div = $.querySelector(".div");
    let img = $.createElement("img") ; img.classList.add("episode-img") ;img.src = image; 
    let episodeTitle = $.querySelector(".title");
    episodeTitle.textContent = `${title} : `;
    let EpisodeDescription = $.querySelector(".description");
    EpisodeDescription.textContent = description;
    div.append(img)
    let episodesGenres =  $.querySelector(".genres") ; episodesGenres.textContent = `genres :  ${genres}`;
    let statusEpisode = $.querySelector(".status-Episode");
    statusEpisode.textContent = ` status : ${status}`
    // box.append(div)
}
document.addEventListener("DOMContentLoaded" , ()=> {
    if(dataFetch()){

    }else{
        alert('Something Goes Wrong !!')
    }
    
})

