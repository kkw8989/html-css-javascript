let msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>정기 점검 중입니다</h2>';
msg += '오전 3시 ~ 4시 사이에 서버 점검이 있습니다<br>';
msg += '이 시간 동안에는 서비스 이용이 불가능 합니다.</div>';

let elNote = document.createElement('div');
elNote.setAttribute('id', 'note');                  // div의 id속성 생성해서 값을 note를 추가
elNote.innerHTML = msg;                             // div에 msg저장, 메시지 출력
document.body.appendChild(elNote);
// appendChild() 자식 노드를 생성하는 함수, 공지에 페이지 추가

function dismissNote(){                   // 스크립트에 의해 추가되었던 노트 제거
    document.body.removeChild(elNote);    // 자식노드 제거, 공지사항 레이어 제거
}

let elClose = document.getElementById('close');         // 닫기 버튼 누름
elClose.addEventListener('click', dismissNote, false);  // 닫기 버튼 클릭되면 공지사항 레이어 제거