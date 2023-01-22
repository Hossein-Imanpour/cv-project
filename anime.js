const $ = document;
const params = new URLSearchParams(window.location.search);
const animeId = params.get('animeId');
// console.log(animeId);

const dataFetch = async () =>{
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/info/${animeId}`)
    const data = await res.json()
    // renderFetch(data)
    console.log(data);
    const {title, image , type , genres , description , status , episodes} = data;
    // console.log(title);
    const box = $.querySelector(".box");
    let div = $.querySelector(".div");
    let img = $.createElement("img") ; img.classList.add("episode-img") ;img.src = image; 
    let episodeTitle = $.querySelector(".title");
    episodeTitle.textContent = `${title} : `;
    let EpisodeDescription = $.querySelector(".description");
    EpisodeDescription.textContent = description;
    // if(description.length > ){

    // }
    div.append(img)
    let episodesGenres =  $.querySelector(".genres") ; episodesGenres.textContent = `genres :  ${genres}`;
    let statusEpisode = $.querySelector(".status-Episode");
    statusEpisode.textContent = ` status : ${status}`;
    let episodeUrl = $.querySelector(".bturl")
    // episodeUrl.href = episodes
    lengthEpisode(data)
    // box.append(div)
}
function lengthEpisode(detail){
    // console.log(detail);
    const {episodes  ,url} = detail
    console.log(episodes);
    episodes.forEach(element => {
        // console.log(element);
        // console.log(episodes);
        const id =element.id ;
          let tr = $.createElement("tr"); tr.classList.add('trrTable');
          let td = $.createElement("td") ; td.classList.add('tddTable');
          let tdLink = $.createElement("td") ; tdLink.classList.add('tdLInk');
          let a = $.createElement("a") ; a.classList.add("a-inside-tdLink");
          a.href = `play.html?id=${id}` ; 
          a.textContent = ' watch '; a.target = '_blank'
          let tbody = $.querySelector(".tbody")
          td.textContent = element.number ; 
          tdLink.append(a)
          tr.append(td)
          tr.append(tdLink)
          tbody.append(tr);
        //   console.log(element.url);
    });
}


document.addEventListener("DOMContentLoaded" , ()=> {
    if(dataFetch()){

    }else{
        alert('Something Goes Wrong !!')
    }
    
})

