const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.button');
let savedData = localStorage.getItem('savedImages');
let numberNode = document.querySelector('.number');
let limitNode = document.querySelector('.limit');

btnNode.addEventListener('click', (event) => {    
  event.preventDefault();
  resultNode.textContent = "";
   let number = numberNode.value;
   let limit = limitNode.value;
  if ((number < 1 || number > 10) && (limit < 1 || limit > 10)) {
      resultNode.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
    } else if (limit < 1 || limit > 10) {
        resultNode.innerHTML = "<p>Лимит вне диапазона от 1 до 10</p>";
    } else if (number < 1 || number > 10) {
        resultNode.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10</p>";
    } else {
        fetch(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`)
        .then((response) => {
         return response.json();
    })
     .then((savedData) => {
            localStorage.setItem('savedImages', JSON.stringify(savedData));
            displayResult(savedData);
        })  
      .catch(() => {console.log('error')
   });
  }
});
  
function displayResult(savedData) {
    let cards = "";
    if (savedData) {
        savedData.forEach((item) => {
            const cardBlock = `
            <div class="card">
                <img src="${item.download_url}" class="card-image">
            </div>`;
            cards += cardBlock; 
        });
        resultNode.innerHTML = cards;
    }
}

displayResult(JSON.parse(savedData));
