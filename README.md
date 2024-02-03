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

