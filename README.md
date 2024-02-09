# 📢 레포지토리 설명
자바스크립트 입문 공부

# 🗓️ 공부 기간
개념) 2024.01.25 ~<br/>
아직 웹개발기능대회 문제는 안풀었음 (개강전에 시간남으면 풀듯)

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

# ✍️ Memo(Javascript 기본)
<details>
<summary>☑️ 이벤트 버블링</summary>
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
  <summary>☑️ data-자료이름="값"</summary><br/>

  html태그에 몰래 정보를 숨기는 기능이다.
  ```
  <li class="tab-button" data-id="0">Products</li>

  // 숨겼던 자료 출력은 셀렉터.dataset.자료이름
  document.getElementsByClassName('tab-button')[0].dataset.id
  ```
</details>
<details>
<summary>☑️ 쓸만한 자바스크립트 라이브러리들</summary><br/>
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
<br/>
8. Hammer.js<br/>
- 터치랑 마우스클릭을 동시에 구현해놓은 기능도 포함된 라이브러리<br/>
- 브라우저간 호환성도 잡아줌<br/>
- 이벤트리스너 6개말고 1개만 필요<br/>
- 스와이프, pinch, rotate 이벤트리스너도 제공<br/>
</details>

<details>
  <summary>☑️ 서버/클라이언트 사이드 렌더링</summary>
  <br/>
  서버에서 html파일을 user에게 보낼 때, 방법이 두가지가 있습니다.<br/>
  1. SSR: html파일을 이미 서버에서 다 완성해서 보냄, 서버가 쫌 귀찮음<br/>
  2. CSR: 서버에서 클라이언트에게 '텅 빈 html파일 + 데이터'를 보냄 --> html을 완성시키는 걸 js에게 시킴 --> user의 브라우저에서 일하는 js는 이리저리 일해서 html파일을 채우게 됨<br/>
</details>

<details>
  <summary>☑️ html 생성법</summary><br/>
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
  <summary>☑️ arrow function에서의 this</summary>
  <br/>
  - arrow function안에서 this를 사용하면, 바깥에 있던 this를 그대로 가져다씀<br/>
  - 반면, function안에서 this를 사용하면, this가 알맞게 재정의됨<br/>
  
</details>

<details>
<summary>☑️ ajax</summary>
<br/>
✔️ API 문서<br/>
서버 개발자들은 가끔 API문서를 작성합니다. 이 경로(url)로 GET요청하면, 이런 데이터 보내준다는 설명들이 적혀있는게 API 문서입니다.
이런거보고 여러분들이 서버랑 통신하면 됩니다.<br/><br/>

✔️ ajax란?<br/>
서버에 GET/POST 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능을 AJAX라고 합니다.
AJAX를 사용하면, 새로고침 없이도 쇼핑몰 상품을 더 가져올 수 있고, 새로고침 없이도 댓글을 서버로 전송할 수도 있고..그렇습니다. (근데 요새는 다 Axios쓴다고 함, Axios는 Ajax보다 더 편리하고 간결한 HTTP 요청 처리를 위한 라이브러리로, 브라우저와 Node.js에서 모두 사용할 수 있습니다.)
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
<br/>

✔️ Ajax와 Fetch와 Axios 차이점 비교해보기<br/>
작업을 하다보면, 클라이언트와 서버간의 데이터를 주고 받기 위해서 HTTP통신을 하게 됩니다. 비동기 HTTP 통신에 쓰이는 Ajax, Axios, Fetch의 차이점을 알아봅시다. <br/>
<table>
  <tr>
    <th>Ajax</th>
    <td>
      Asyncchronous Javascript And XML의 약어로, 말 그대로 javascript를 사용한 비동기 HTTP 통신 기술입니다. 비동기적 통신으로 인해 페이지 전체를 로딩하지 않고(항상 새로고침 안하고) 일부분만 갱신할 수 있습니다. 그리고 ajax를 더 편리하게 jquery로 사용할 수 있어서 묶어서 사용할때가 많다. 그래서 같이 묶여서 불릴때가 있는데, 절대 같은건 아니라는거~
    </td>
  </tr>
  <tr>
    <th>Axios</th>
    <td>fetch보다 훨씬 쓰기 편하고 기능(옵션)들이 많이 들어있다. JSON 변환 과정도 빠져서 매우 편리하다. 크로스 호환성도 좋다. 단, 내장 라이브러리가 아니기 때문에 별도의 설치가 필요하다.</td>
  </tr>
  <tr>
    <th>Fetch</th>
    <td>ES6부터 들어가게 된 Javascript 내장 라이브러리이다. 내장 라이브러리라서 별도의 설치(import)가 필요없다. 그리고 Promise기반으로 만들어졌다. Promise기반이다보니, 데이터를 다루기 편하다. 그러나 Axios에 비해 기능들이 부족하고, JSON으로 변환을 해주어야 하는 과정이 생기고, 지원하지 않는 브라우저가 있고(IE11), 네트워크 에러 발생 시, timeout 옵션이 없어 기다려야한다는 단점들이 있다.</td>
  </tr>
</table>
</details>

<details>
<summary>☑️ 로컬스토리지</summary><br/>
장바구니같은 기능을 만들때 사용할겁니다..유저가 구매 버튼을 누르면 그 상품명을 어딘가 저장하면 끝인데 실제 서비스였으면 서버로 보내서 DB이런데 저장하는게 좋겠지만, 우리는 서버같은게 없기 때문에 브라우저 저장공간을 이용해봅시다.<br/><br/>
- 브라우저 안에 몰래 데이터 저장기능, 서버가 없다면 로컬스토리지로 데이터 저장 가능!<br/>
- 데이터를 반영구적으로 저장할 수 있는 방법(브라우저 안의 저장공간 이용)<br/>
- 저장공간 위치: 개발자도구 --> Application --> 다양한 저장 공간들이 Application에 존재
  <table>
    <tr>
      <th>localStorage, sessionStorage</th>
      <td>key와 value형태로 저장 가능<br/>단, 5MB의 문자/숫자만 저장 가능(그러나 JSON형태로 바꾸면 localStorag에 array, object형태로 저장 가능)
      <br/>로컬스토리지와 다르게, 세션은 브라우저를 껏다 키면 정보가 날아감. 즉, localStorage는 사이트를 재접속해도 유지되나, sessionStorage는 사이트를 나가면 자동 삭제된다.<br/>참고로, 데이터 수정 과정이 까다로우니 싫으면 서버를 만들던가 하셈..
      </td>
    </tr>
    <tr>
      <th>IndexedDB</th>
      <td>데이터가 크고 복잡할 경우 or 구조화된 대용량 데이터 저장 시</td>
    </tr>
    <tr>
      <th>Cookies</th>
      <td>유저의 인정 정보를 저장하고 싶을 때 (보통 로그인 정보를 저장함)</td>
    </tr>
    <tr>
      <th>Cache Storage</th>
      <td>html/css/js파일을 저장하는 곳<br/>
      우리가 웹사이트를 접속했을 때, html/css/js파일을 매번 새로 다운받는게 아니라, 하드에 몰래 저장해놓고 가져다가 쓰고 싶을 때 사용함
      </td>
    </tr>
  </table>
</details>
<details>
  <summary>☑️ 모던 웹개발 - 이것저것 지식들...</summary><br/>
  <table>
    <tr>
      <th width="200px">라이브러리</th>
      <td>
        - 코딩을 편하게 하려고 남들이 만들어놓은 코드들을 뜻함<br/>
        - 자바스크립트 기본 문법 자체가 별로여서, 옛날까지만 해도 JavaScript library를 굉장히 많이 이용했음(지금 더 심해짐)<br/> 
      </td>
    </tr>
    <tr>
      <th>npm</th>
      <td>
        - npm을 사용하면 쉽게 js라이브러리 설치/수정/삭제가 가능함<br/>
        - 번들링툴(ex. webpack)을 사용하면, 라이브러리안에서 안쓰는 코드같은걸 삭제해줘서 필요없는 용량같은 걸 획기적으로 줄일 수 있음<br>
        - npm은 패키지 매니저로, js라이브러리 관리를 도와줍니다. <br/>
        - 터미널에 "npm install 라이브러리명"이런식으로 입력하면 바로 라이브러리 설치가 가능함<br/>
        - node.js 설치하면 자동으로 npm 따라옴
      </td>
    </tr>
    <tr>
      <th>node.js</th>
      <td>
        - 자바스크립트 코드는 원래 웹브라우저 안에서만 사용할 수 있는데, 근데 그걸 브라우저를 키지 않고도 PC아무데서나, 자바스크립트 파일을 실행할 수 있게 도와주는 자바스크립트 실행 엔진이 node.js입니다. 그러면 터미널에서 "node index.js"이런식으로 실행해도 js가 바로 실행됩니다.
      </td>
    </tr>
    <tr>
      <th>bundling tool</th>
      <td>
        - npm으로 설치한 라이브러리들은 모두 node_modules라는 폴더에 추가가 되는데, 여기에 있는 라이브러리를 파일에서 가져다가 쓰고 싶다면, "import * as 어쩌구 from 'mysql'"이런식으로 불러다가 사용 가능합니다. <br/>
        - 이때, 번들링툴(TURBOPACK/VITE/rollup.js/webpack/PARCEL)을 사용하면 js파일들을 하나로 합쳐줍니다. 그러면 나중에 배포도 쉬워지고, 자바스크립트 안에서 내가 쓰는 코드만 추려서 합쳐주기 때문에 전체 파일 용량을 줄여줌..<br/>
        - 또한, .ts/.vue/.jsx등으로 개발한 것들도 모두 .js로 변환해줘서 굳굳<br/>
        - 최신 자바스크립트 문법들을 호환성 좋은 문법들로 바꿔주기도 함<br/>
      </td>
    </tr>
    <tr>
      <th>build</th>
      <td>
        - 라이브러리를 이것저것 설치해서 개발이 끝났다면, 번들링 툴을 사용해서 파일을 하나로 합쳐야 합니다. 그러면 작업 터미널에서 "npm run build"라고 입력하면 됩니다. 그러면 dist폴더가 생성되고, 합쳐진 걸 서버에 올리거나 그러면 웹개발 끝입니다.
      </td>
    </tr>
    <tr>
      <th>SPA</th>
      <td>
        - 요새 많이 사용하는 자바스크립트 라이브러리들..(Vue/Svelte/React/Angular) => 이런걸 가져다가 쓰면 Single Page Application을 만들 수 있습니다. <br/>
        - spa란, 모바일 앱처럼 새로고침 없이 부드럽게 동작하는 사이트!<br/>
        - html 생성과 변경이 매우 쉬워짐<br/>
        - html생성과 조작을 자바스크립트로 하는 걸, client side rendering이라고 함
      </td>
    </tr>
    <tr>
      <th>State Management</th>
      <td>
        - SPA 라이브러리들의 단점이 있는데 바로, 수많은 변수관리가 어렵다는 점입니다.. <br/>
        - 변수들을 관리하는 행위를 state management라고 합니다. <br/>
        - 이걸 쉽게 도와주는 외부 라이브러리들(redux/recoil/mobx/zustand/jotai)을 설치해서 해결 가능합니다.<br/>
      </td>
    </tr>
    <tr>
      <th>Server Side Rendering</th>
      <td>
        - 실은 이 라이브러리들(Vue/Svelte/React/Angular)의 심각한 단점이 존재하는데, 바로 첫번째는 웹페이지들을 구글검색결과에 노출시키는게 어렵다는 점입니다. 두번째는 자바스크립트 파일 사이즈가 너무 커져서 첫페이지의 로딩 시간이 끔찍하다는 점입니다. => SSR로 해결 가능!<br/>
        - SSR이란, HTML을 프론트엔드 자바스크립트 코드로 만드는게 아니라, 서버에서 생성해서 보내주는 방식입니다. 
      </td>
    </tr>
    <tr>
      <th>meta-framework</th>
      <td>
        - "저는 간지나게 리액트문법으로 server side rendering하고 싶은데요?"<br/>
        - 그러면 이런 라이브러리들(Next.js/NuxtJS/Remix/SvelteKit)을 설치해서 가져다가 쓰면 됩니다.<br/>
        - 자바스크립트 문법 하나만으로 간단한 서버까지 만들수도 있고, ssr도 할 수 있어서, 프론트엔드만 하던 사람들도 되게 쉽게 풀스택 개발이 가능하게 만들어주는 라이브러리임.
      </td>
    </tr>
    <tr>
      <th>typescript</th>
      <td>
        - 자바스크립트는 타입을 강제하는게 없어서, 타입 틀려서 발생하는 버그도 봐줍니다..이런것들을 방지하고 싶다면 타스를 쓰세요. <br/>
        - 참고로 .ts파일은 브라우저에서 해석할 수 없어서 bundling tool을 사용해서 나중에 .js로 변환해야합니다.
      </td>
    </tr>
    <tr>
      <th>serverless</th>
      <td>
        - 완전한 웹서비스 하나를 만들고 싶다면, 프론트엔드에서만 코드를 짜서 되는게 아니라, (webpage<-server<-DB)이렇게 서버와 데이터베이스까지 있어야 웹서비스같은 걸 만들 수 있는데, 내가 서버를 만들 줄 모르면 서버를 대신 만들 줄 아는 서비스를 가져다가 쓰면 됩니다. <br/>
        - 유명한 것들: Firebase/supabase/AWS Lambda/PocketBase<br/>
        - 이런걸 쓰면, 회원인증/서버기능/DB저장 이런걸 서버 구현 없이도 가능하게 해줌
      </td>
    </tr>
  </table>
</details>

# ✍️ Memo(Javascript 중급)
