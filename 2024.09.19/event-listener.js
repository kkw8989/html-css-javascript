function checkUsername(){
    let elMsg = document.getElementById('feedback');
    if (elUsername.value.length < 5){
        elMsg.textContent = '이름은 다섯글자 이상으로 입력하세요';
    }else{
        elMsg.textContent = '';
    }
}

// document에 접속해서 getElementById : element = 태그 : username이라는 ID를 get(조회해라) hg
let elUsername = document.getElementById('username');

// blur = 요소가 포커스를 잃을때 -> 커서가 다른곳으로 갈 때, checkUsername()호출
// addEventListener(이벤트종류, checkUsername = 호출하는 함수, false = 이벤트흐름)
elUsername.addEventListener('blur',checkUsername,false);

