// 버튼 0 누르면
    // - 모든 버튼에 붙은 orange 클래스명 제거
    // - 버튼0에 orange 클래스명 추가
    // - 모든 div에 붙은 show 클래스명 제거 
    // - div0에 show 클래스명 추가

let tabButtons = document.getElementsByClassName('tab-button');
let tabContents = document.getElementsByClassName('tab-content');

for(let n=0; n<tabButtons.length; n++) {
    tabButtons[n].addEventListener('click', function() {
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
    });
}
