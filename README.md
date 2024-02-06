# 📢 레포지토리 설명
자바스크립트 입문 공부

# 🗓️ 공부 기간
2024.01.25 ~ 

# 👩‍💻 Commit 형식
<table>
  <tr>
    <th>[myself] 내용</th>
    <td>스스로 과제 코드</td>
  </tr>
  <tr>
    <th>[answer] 내용</th>
    <td>해설 후 수정 코드</td>
  </tr>
  <tr>
    <th>내용</th>
    <td>내용에 관련된 코드</td>
  </tr>
</table>

#### 🔊 별표시 
공부하다가 어려웠던 건, 어려웠던 정도만큼 ⭐표시가 commit 문구 앞에 붙습니다. (⭐~⭐⭐⭐)

# ☑️ Memo
<details>
<summary>이벤트 버블링</summary>
<br/>

자바스크립트에서 이벤트 버블링은 항상 일어납니다.
```
<div class="black-bg">  <!-- 이거도 클릭한거임 -->
  <div class="white-bg">  <!-- 이거도 클릭한거임 -->
    <h4>로그인하세요</h4>  <!-- 이거 클릭하면 -->
  </div>
</div>
```

#### ✔️ 유용한 이벤트 관련 함수들<br/>
e.target; // 유저가 실제로 클릭한 html요소를 알려줌<br/>
e.currentTarget; // 이벤트리스너가 달린곳을 알려줌(this; 사용과 똑같음)<br/>
e.preventDefault(); // 클릭이 되지 않은 것처럼 동작하게 해줌(폼에서 유용)<br/>
e.stopProgation(); // 상위요소로 가는 이벤트 버블링을 막아줌<br/>
</details>

<details>
  <summary>data-자료이름="값"</summary><br/>

  html태그에 몰래 정보를 숨기는 기능이다.
  ```
  <li class="tab-button" data-id="0">Products</li>

  // 숨겼던 자료 출력은 셀렉터.dataset.자료이름
  document.getElementsByClassName('tab-button')[0].dataset.id
  ```
</details>
<details>
<summary>쓸만한 자바스크립트 라이브러리들</summary><br/>
1. Swiper<br/>
- 캐러셀의 경우, 직접만들어도 되지만, 좀 이쁘게 또는 쉽게 여러기능을 만들고 쉽다면 Swiper 라이브러리를 써도 됨<br/><br/>
2. Chart.js<br/>
- 웹페이지에 차트를 만들고 싶으면 쓰면 됨<br/><br/>
3. Animate On Scroll<br/>
- 스크롤 내리면 요소가 서서히 등장하는 애니메이션을 만들고 싶을 때 쓰면 됨<br/><br/>
4. EmailJS<br/>
- 원래 이메일 전송은 서버가 해야하지만, Gmail이런거 서버를 잠깐 빌리면 자바스크립트만으로 이메일 전송 가능<br/>
- user가 내 이메일 계정으로 이메일 전송도 가능하고, 내 이메일 계정으로 남에게 이메일 전송도 가능함<br/>
<br/>
5. Lodash<br/>
- array, object, 문자, 숫자 자료를 다루기 편해지는 기본함수들 제공
<br/><br/>
6. React/Vue<br/>
- 페이지가 너무 많아서 UI재활용이 자주 필요한 사이트나, 모바일 앱처럼 페이지 이동 없이 동작하는 Single Page Application을 만들 때 유용한 자바스크립트 라이브러리<br/>
<br/>
7. Fullpage.js<br/>
- 웹페이지를 ppt처럼 만들어줌(하지만 이런 UI는 유행이 지남) <br/>
</details>

<details>
  <summary>서버/클라이언트 사이드 렌더링</summary>
  <br/>
  서버에서 html파일을 user에게 보낼 때, 방법이 두가지가 있습니다.<br/>
  1. SSR: html파일을 이미 서버에서 다 완성해서 보냄, 서버가 쫌 귀찮음<br/>
  2. CSR: 서버에서 클라이언트에게 '텅 빈 html파일 + 데이터'를 보냄 --> html을 완성시키는 걸 js에게 시킴 --> user의 브라우저에서 일하는 js는 이리저리 일해서 html파일을 채우게 됨<br/>
</details>

<details>
  <summary>html 생성법</summary><br/>
  방법1은 코드가 너무 길고 복잡하기 때문에, 특별한 이유가 없으면 2번 방법을 씁니다(1번이 아주 미세하게 빠르게 동작함). <br/><br/>
  방법1)<br/>

  ```
    let a = document.createElement('p'); 
    a.innerHTML = '안녕'; 
    document.querySelector('#test').appendChild(a); 
  ```

  방법2)<br/>

  ```
    let a = '<p>안녕</p>';
    document.querySelector('#test').insertAdjacentHTML('beforeend', a);
  ```
</details>

<details>
  <summary>arrow function에서의 this</summary>
  <br/>
  - arrow function안에서 this를 사용하면, 바깥에 있던 this를 그대로 가져다씀<br/>
  - 반면, function안에서 this를 사용하면, this가 알맞게 재정의됨<br/>
  
</details>

<details>
<summary>ajax</summary>
<br/>
✔️ API 문서<br/>
서버 개발자들은 가끔 API문서를 작성합니다. 이 경로(url)로 GET요청하면, 이런 데이터 보내준다는 설명들이 적혀있는게 API 문서입니다.
이런거보고 여러분들이 서버랑 통신하면 됩니다.<br/><br/>

✔️ ajax란?<br/>
서버에 GET/POST 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능을 AJAX라고 합니다.
AJAX를 사용하면, 새로고침 없이도 쇼핑몰 상품을 더 가져올 수 있고, 새로고침 없이도 댓글을 서버로 전송할 수도 있고..그렇습니다. (근데 요새는 다 Axios쓴다고 함)
<br/>

✔️ 제이쿼리로 get요청<br/>
```
$.get('https://codingapple1.github.io/hello.txt213')
  .done(function(data) {
    console.log(data); // 성공 시
  })
  .fail(function() {
    console.log('실패함'); // ajax 실패시 특정 코드 실행하고 싶으면
  })
```

✔️ fetch<br/>
```
fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });
```
생자바스크립트의 경우에는 fetch같은 걸 사용해서 AJAX요청이 가능합니다. fetch함수는 Edge 브라우저 이상에서만 동작합니다. 제이쿼리를 썼을때보다 코드 한줄이 더 필요한데, 그 이유는 제이쿼리를 썼을때는 알아서 object데이터를 JSON으로 바꿔서 전송해줬는데, 생자바스크립트의 경우 그렇기 않기 때문입니다. 
<br/>
jQuery의 $.get() 이런 건, JSON으로 자료가 도착하면 알아서 array/object자료로 바꿔줍니다. 그러나, 기본함수 fetch()같은 건, JSON으로 자료가 도착하면 알아서 array/object 자료로 바꿔주지 않습니다. 그래서 fetch()로 가져온 결과를 array/object로 바꾸고 싶으면 res.json()이런 코드 한 줄 추가하면 됩니다. 그게 귀찮으면 jQuery나 axios이런 라이브러리 설치하면 ajax가 약간 더 간편해집니다.
</details>

<details>
<summary>로컬스토리지(브라우저 안에 몰래 데이터 저장기능)</summary><br/>
- 데이터를 반영구적으로 저장할 수 있는 방법(브라우저 안의 저장공간 이용)<br/>
- 저장공간 위치: 개발자도구 --> Application --> 
</details>
