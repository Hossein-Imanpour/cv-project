const $ = document;
const cardSection = document.querySelector(".card-section");
async function fetchData(){
    const res = await fetch('https://api.consumet.org/anime/gogoanime/recent-episodes')
    const data = await res.json()
    fetchRendering(data)
}
fetchData()

function fetchRendering(array){
    let data = array.results    
    // console.log(array.results);
    data.forEach(item => {
            // console.log(item);
            const {title , image ,id , url } = item;
            // console.log(url);
        const titleEpisode = $.createElement('a'); titleEpisode.classList.add('card-text'); titleEpisode.href = `/anime.html?animeId=${id}`;
        titleEpisode.textContent = title; 
        // ======
        const cards = $.createElement("div"); cards.classList.add('cards'); 
        cards.append(titleEpisode);
        cardSection.appendChild(cards);
        // ======
        const img = $.createElement('img'); img.classList.add("image"); img.src = image;
        cards.append(img)
    });
}