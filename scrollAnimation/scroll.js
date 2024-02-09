
// 윈도우가 스크롤 될때마다 코드를 실행하려면?
window.addEventListener('scroll', function() {
    let height = window.scrollY;
    console.log(height);

    // 650~1150까지 스크롤바를 내리면, 첫번째 카드의 opacity 속성을 서서히
    // 1에서 0으로 변경해주셈

    // x값이 650->1150 변할 때, y값은 0->1로 변하게 하고싶다면?
    let y = (-1/500)*height + (115/50);

    // x값이 650->1150 변할 때, transform의 scale을 0.9로 만들고 싶다면?
    let scale = (-1/5000)*height + (113/100);

    // opacity 조절
    document.getElementsByClassName('card-box')[0].style.opacity = y;

    // scale 조절
    document.getElementsByClassName('card-box')[0].style.transform = 'scale('+scale+')';
    
});