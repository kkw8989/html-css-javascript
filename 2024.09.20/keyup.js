let el;                                                

function charCount(e) {            // charCount() : 문자 개수 수정, 마지막에 입력된 문자를 보여준다
  let textEntered, charDisplay, counter, lastkey;         
  textEntered = document.getElementById('message').value;  // 사용자가 입력한 텍스트를 저장
  charDisplay = document.getElementById('charactersLeft'); // 문자 개수 출력할 요소
  counter = (180 - (textEntered.length));                  // 입력 가능한 문자의 개수
  charDisplay.textContent = counter;                       // 남은 문자를 보여준다

  lastkey = document.getElementById('lastKey');            // 마지막에 입력된 키를 얻어온다
  lastkey.textContent = '마지막 입력의 ASCII코드: ' + e.keyCode;
}
el = document.getElementById('message');            
el.addEventListener('keyup', charCount, false); // 사용자가 키보드에서 떼면 charCount()함수 실행