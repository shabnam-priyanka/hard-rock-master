const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click',function(){
    const searchInput = document.getElementById('searchInput').value;

    fetch(`https://api.lyrics.ovh/suggest/${searchInput}/`)
    .then(response => response.json())
    .then(data => getSearchResult(data));
})

function getSearchResult(search){
    let parent = document.getElementById('parent');
    parent.innerHTML = '';
    for(let i = 0; i<10 ;i++){
        
        let title = search.data[i].title;
        let albumTitle = search.data[i].album.title;
        let artist = search.data[i].artist.name;
        let image = search.data[i].artist.picture_small;
        
        let result = `<div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-8">
                <h3 class="lyrics-name" id="title">${title}</h3>
                <p class="author lead">Album by <span id="artistName">${artist}</span></p>
                <p class="author lead">Album Title :  <span id="artistName">${albumTitle}</span></p>
            </div>
            <div class="col-md-1">
                <img src="${image}" alt="">
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button  onclick="getArtistTitle('${artist}','${title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        </div>`;
        parent.innerHTML += result;
        
    }
}
//  api can find the lyrics and artist 
function getArtistTitle(artist,title){
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(response => response.json())
    .then(song => showLyrics(song,title));
}
//  lyrics are available or not
function showLyrics(song,title){
    if(song.lyrics == undefined){
        document.getElementById('displayLyrics').innerText = "there have no lyrics";
    }else{
        document.getElementById('displayLyrics').innerText = song.lyrics;
    }
    document.getElementById('songTitle').innerText = title;
}