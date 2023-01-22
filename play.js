const $ = document;
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const dataFetch  = async () =>{
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${id}`);
    const data = await res.json();
    console.log(data);
    console.log(`hey`);
    const video = $.querySelector(".play");
    video.src = data
}

// fetch(`https://api.consumet.org/anime/gogoanime/watch/${id}`)
// .then((res) => {
//     res.json();
// })
// .then((data) => {
// console.log(data);
//     const video = $.querySelector(".play");
//     video.src = data
// })