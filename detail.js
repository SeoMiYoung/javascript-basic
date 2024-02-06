// 버튼 0 누르면
    // - 모든 버튼에 붙은 orange 클래스명 제거
    // - 버튼0에 orange 클래스명 추가
    // - 모든 div에 붙은 show 클래스명 제거 
    // - div0에 show 클래스명 추가

let tabButtons = document.getElementsByClassName('tab-button');
let tabContents = document.getElementsByClassName('tab-content');

document.getElementsByClassName('list')[0].addEventListener('click', function(e) {
    openTab(e.target.dataset.id);
});

function openTab(n) {
    for(let i=0; i<tabButtons.length; i++) {
        if(n==i) {
            tabButtons[i].classList.add('orange');
            tabContents[i].classList.add('show');
        }
        else {
            tabButtons[i].classList.remove('orange');
            tabContents[i].classList.remove('show');
        }
    }
}

// Array와 Object 자료형
let car = {name: '소나타', price: [50000, 3000, 4000]};
const cardElement = document.querySelector('.card.p-3');
cardElement.textContent = `${car['name']} / ${car['price'][0]}`;
