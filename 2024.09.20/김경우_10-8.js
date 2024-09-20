document.addEventListener('DOMContentLoaded', function(){  							//  DOMContentLoaded이라는 event발생, 익명함수 호출
	document.querySelector(".mobile-menu").addEventListener("click", function(e){ 	// .mobile-menu 에서 click event 발생하면
		if ( document.querySelector('.menuwrap').classList.contains('on') ){  		// menuwrap = 메뉴 목록 버튼 누르면 나오는 배경에서 on이 포함되어 있다면
		    // 메뉴닫힘
			document.querySelector('.menuwrap').classList.remove('on');  			//  menuwrap에 있는 on = 메뉴펄침?을 제거
			document.querySelector('.mobile-menu i').classList.remove('fa-times');  // mobile-menu i에 있는 fa-times 제거
			document.querySelector('.mobile-menu i').classList.add('fa-bars');  	// mobile-menu i에 있는 fa-bars 추가

		    // 페이지 스크롤 락 해제
		    document.querySelector('#dimmed').remove(); 							// #dimmed 제거
		} else {   																	// menuwrap에서 on이 포함 되어 있지 있다면
		    // 메뉴펼침
			document.querySelector('.menuwrap').classList.add('on');  				// menuwrap에 있는 on = 메뉴펄침? 추가
			document.querySelector('.mobile-menu i').classList.remove('fa-bars'); 	// mobile-menu i 에 있는 fa-bars 제거
			document.querySelector('.mobile-menu i').classList.add('fa-times'); 	// mobile-menu i 에 있는 fa-times 추가

			// 페이지 스크롤 락 레이어 추가
		    let div = document.createElement('div'); 								// div에 div라는 요소 추가
		    div.id = 'dimmed'; 														// div의 id = dimmed
		    document.body.append(div); 												// body에 div를 추가

		    // 페이지 스크롤 락  모바일 이벤트 차단
		    document.querySelector('#dimmed').addEventListener('scroll touchmove touchend mousewheel', function(e){ 
																					// #dimmed에서 scroll touchmove touchend mousewheel 발생하면
				e.preventDefault(); 												// 이벤트 동작 막음 
				e.stopPropagation(); 												// 이벤트 전파 막음 
				return false; 														// false값 리턴 = 모바일 이벤트 차단
		    });
		}
	});	
})
																					// .mobile-menu i : 메뉴 목록 버튼
																					// .menuwrap : 메뉴 목록 버튼 누르면 나오는 배경
																					// #dimmed : 메뉴 목록 버튼 누르면 나오는 뒷배경