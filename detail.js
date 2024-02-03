// 버튼 0 누르면
    // - 모든 버튼에 붙은 orange 클래스명 제거
    // - 버튼0에 orange 클래스명 추가
    // - 모든 div에 붙은 show 클래스명 제거 
    // - div0에 show 클래스명 추가

let tabButtons = document.getElementsByClassName('tab-button');
let tabContents = document.getElementsByClassName('tab-content');

document.getElementsByClassName('list')[0].addEventListener('click', function(e) {
    if(e.target == tabButtons[0]) {
        openTab(0);
    }
    else if(e.target == tabButtons[1]) {
        openTab(1);
    }
    else {
        openTab(2);
    }
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