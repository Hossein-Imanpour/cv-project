const $ = document;
const params = new URLSearchParams(window.location.search);
const url = params.get('url');

const dataFetch  = async () =>{
    const res = await fetch(`https://api.consumet.org/anime/gogoanime/watch/${url}`);
    const data = await res.json();
    console.log(data);
}