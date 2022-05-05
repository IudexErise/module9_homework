const resultNode = document.querySelector('.result');
const btnNode = document.querySelector('.button');

btnNode.addEventListener('click', () => {
    let width = document.querySelector('.width').value;
    let height = document.querySelector('.height').value;

if(width > 100 && width < 300 && height > 100 && height < 300) {
        fetch(`https://picsum.photos/${width}/${height}`)

        .then((response) => {
            resultNode.innerHTML = `
            <div class="card">
                <img src="${response.url}">
            </div>`;
        })
        .catch(() => {console.log('error')});
    } else {
        resultNode.innerHTML = "<p>Одно из чисел вне диапазона от 100 до 300</p>";
    }
})