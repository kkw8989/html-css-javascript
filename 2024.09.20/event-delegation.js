function getTarget(e){
    if (!e){              // 이벤트 객체가 존재하지 않으면
        e = window.event;  // ie의 event 객체 사용
    }
    return e.traget || e.srcElement;  // 이벤트가 발생한 요소를 가져온다
    //e.target = 이벤트가 일어나는 태그
}

function itemDone(e){                // itemDone : 아이템에서 목록 제거
    let target, elParent, elGrandparent;
    target = getTarget(e);         // 링크가 클릭된 아이템을 가져옴

    /*
      elParent = target.parentNode;   //클릭된 요소의 부모 요소를 가져온다
    elGrandparent = target.parentNode.parentNode;   // 클릭된 요소의 부모요소의 부모요소를 가져온다
    elGrandparent.removeChild(elParent);   //부모요소를 제거한다
  
    The next 10 lines improve that example
    */ 

    if ( target.nodeName.toLowerCase() == "a"){  //클릭한 요소의 태그 이름이 a면
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem); // 부모 요소(li)를 제거
    }

    if ( target.nodeName.toLowerCase() == "em"){  //클릭한 요소의 태그 이름이 em이면
        elListItem = target.parentNode.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem); // 부모 요소(li)를 제거
    }

    // 링크의 동작이 실행되지 않도록 한다. a태그는 이동하는 기본속성이 있다
    if(e.preventDefault){           // preventDefault() 메서드가 동작하면
        e.preventDefault();
    } else{
        e.returnValue = false;      // ie의 속성 사용
    }
}

// 클릭이벤트가 발생하면 itemDone() 함수를 호출하도록 이벤트리스너를 지정
let el = document.getElementById('shoppingList');
if (el.addEventListener){
    el.addEventListener('click', function(e) {itemDone(e)}, false);
} else{
    el.attachEvent('oneclick', function(e) {itemDone(e)});  // ie의 oneclick 이벤트 사용
}
