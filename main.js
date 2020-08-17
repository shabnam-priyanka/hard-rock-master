let button = document.getElementById('searchBtn');
let inputBox = document.querySelector('input');

let lyrics0 = document.getElementById('Get-Lyrics0')
let lyrics1 = document.getElementById('Get-Lyrics1')
let lyrics2 = document.getElementById('Get-Lyrics2')
let lyrics3 = document.getElementById('Get-Lyrics3')
let lyrics4 = document.getElementById('Get-Lyrics4')
let lyrics5 = document.getElementById('Get-Lyrics5')
let lyrics6 = document.getElementById('Get-Lyrics6')
let lyrics7 = document.getElementById('Get-Lyrics7')
let lyrics8 = document.getElementById('Get-Lyrics8')
let lyrics9 = document.getElementById('Get-Lyrics9')

button.addEventListener('click', function(){
    fetch('https://api.lyrics.ovh/suggest/'+ inputBox.value)
    .then(response => response.json())
    .then(data => {
        console.log(data); 

        let song0 = data['data'][0]['title'];
        lyrics0.innerHTML = song0;

        let song1 = data['data'][1]['title'];
        lyrics1.innerHTML = song1;

        let song2 = data['data'][2]['title'];
        lyrics2.innerHTML = song2;

        let song3 = data['data'][3]['title'];
        lyrics3.innerHTML = song3;

        let song4 = data['data'][4]['title'];
        lyrics4.innerHTML = song4;

        let song5 = data['data'][5]['title'];
        lyrics5.innerHTML = song5;

        let song6 = data['data'][6]['title'];
        lyrics6.innerHTML = song6;

        let song7 = data['data'][7]['title'];
        lyrics7.innerHTML = song7;

        let song8 = data['data'][8]['title'];
        lyrics8.innerHTML = song8;

        let song9 = data['data'][9]['title'];
        lyrics9.innerHTML = song9;

        
        
    })
})



    let getLyrics = document.getElementById('Get-Lyrics0');


    getLyrics.addEventListener('click', function(){
        fetch(`https://api.lyrics.ovh/suggest/ + ${getLyrics.innerText}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 

            getLyrics.innerText = data;
        })
    })