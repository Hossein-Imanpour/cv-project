let $ = document;
const params = new URLSearchParams(window.location.search);
const searchQuery = params.get('search') ;

async function fetchData() {
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/${searchQuery}`);
    const data = await res.json();
    console.log(searchQuery);
    console.log(data);
    dataRender(data.results)
}

document.addEventListener('DOMContentLoaded', () => {
    if (searchQuery) {
        fetchData();
    } else {
        // alert('nothing searched');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nothing Searched!',
            // footer: '<a href="">Why do I have this issue?</a>'
          });
          
    }
});

function dataRender(array){
    array.forEach(item => {
        console.log(item);



                    // console.log(item);
                    const {title , image ,id , url } = item;
                    // console.log(url);
                const titleEpisode = $.createElement('a'); titleEpisode.classList.add('card-text'); titleEpisode.href = `/anime.html?animeId=${id}`;
                titleEpisode.textContent = title; 
                // ======
                const cards = $.createElement("div"); cards.classList.add('cards'); 
                cards.append(titleEpisode);
                let cardSection = $.querySelector('.card-section')
                cardSection.appendChild(cards);
                // ======
                const img = $.createElement('img'); img.classList.add("image"); img.src = image;
                cards.append(img)
    });
}


