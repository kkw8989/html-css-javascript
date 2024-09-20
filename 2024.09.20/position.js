let sx = document.getElementById('sx');
let sy = document.getElementById('sy');
let px = document.getElementById('px');
let py = document.getElementById('py');
let cx = document.getElementById('cx');
let cy = document.getElementById('cy');

function showPosition(event){
    // showPosition() 함수는 event 객체를 참조하는 event라는 이름의 매개변수 사용
    // 좌표는 모두 event객체의 속성을 통해 얻을 수 있음

    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

let el = document.getElementById('body'); // body의 요소 가져옴
el.addEventListener('mousemove', showPosition, false); // 마우스 움직일 때 발생하는 이벤트