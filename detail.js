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

// select
let selectElement = document.querySelectorAll('.form-select');

// 서버에서 데이터 가져와서 그 개수만큼 <option>을 만든다고 가정하자
let pants = [28, 30, 32]; // 일단 서버에서 보낸 데이터라고 치자

// select 요소에 change 이벤트 리스너 추가
selectElement[0].addEventListener('change', function(e) {
    if(e.target.value == '셔츠') {
        let 셔츠템플릿 = `
            <option>95</option>
            <option>100</option>
            <option>105</option>
        `
        selectElement[1].classList.remove('form-hide');
        selectElement[1].innerHTML = '';
        selectElement[1].insertAdjacentHTML('beforeend', 셔츠템플릿);
    }
    else if(e.target.value == '바지') {
        selectElement[1].classList.remove('form-hide');
        selectElement[1].innerHTML = '';

        pants.forEach(function(index) {
            selectElement[1].insertAdjacentHTML('beforeend', '<option>'+index+'</option>');
        });
    }
    else {
        selectElement[1].classList.add('form-hide');
    }
});

