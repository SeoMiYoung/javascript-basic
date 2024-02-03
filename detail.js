// 버튼 0 누르면
    // - 모든 버튼에 붙은 orange 클래스명 제거
    // - 버튼0에 orange 클래스명 추가
    // - 모든 div에 붙은 show 클래스명 제거 
    // - div0에 show 클래스명 추가

let productsBtn = document.getElementsByClassName('tab-button')[0];
let informationBtn = document.getElementsByClassName('tab-button')[1];
let shippingBtn = document.getElementsByClassName('tab-button')[2];

let productsContent = document.getElementsByClassName('tab-content')[0];
let informationContent = document.getElementsByClassName('tab-content')[1];
let shippingContent = document.getElementsByClassName('tab-content')[2];

productsBtn.addEventListener('click', function() {
    // orange 조절
    productsBtn.classList.add('orange');
    informationBtn.classList.remove('orange');
    shippingBtn.classList.remove('orange');

    // div 조절
    productsContent.classList.add('show');
    informationContent.classList.remove('show');
    shippingContent.classList.remove('show');
});
informationBtn.addEventListener('click', function() {
    productsBtn.classList.remove('orange');
    informationBtn.classList.add('orange');
    shippingBtn.classList.remove('orange');

    productsContent.classList.remove('show');
    informationContent.classList.add('show');
    shippingContent.classList.remove('show');
});
shippingBtn.addEventListener('click', function() {
    productsBtn.classList.remove('orange');
    informationBtn.classList.remove('orange');
    shippingBtn.classList.add('orange');

    productsContent.classList.remove('show');
    informationContent.classList.remove('show');
    shippingContent.classList.add('show');
});

