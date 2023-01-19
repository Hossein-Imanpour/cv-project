fetch('https://api.consumet.org/anime/gogoanime/top-airing')
.then((res) => res.json())
.then((data) => console.log(data))