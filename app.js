const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/',
 sound = document.getElementById('sound'); 

 let result = document.querySelector('.result');
const btn = document.getElementById('search-btn');

btn.addEventListener('click',()=>{
    let inpWord = document.getElementById('inp-word').value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data)=> {
        result.innerHTML = `
        <div class="word">
            <h3>${inpWord}</h3>
            <button onclick="playSound()">
                <i class="fa fa-volume-up"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic || ""}</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>
        `;
        sound.setAttribute('src', `${data[0].phonetics[1].audio}`||'');
    })
    .catch(()=>{
        result.innerHTML = `
        <p>Couldn't find the word</p>`;



    });

});

function playSound(){
    sound.play();
}