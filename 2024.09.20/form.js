let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm          = document.getElementById('formSignup');         
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                              
  let pack = this.options[this.selectedIndex].value;   // pack은 annual,montly value가져옴  
  if (pack === 'monthly') { //  1개월 ($5)                          
    elPackageHint.innerHTML = '1년 패키지를 선택하시면 10불을 절약할 수 있습니다!';
  } else {    // 1년 ($50)                                         
    elPackageHint.innerHTML = '탁월한 선택입니다!';          
  }
}

function checkTerms(event) {          //                   
   
  if (!elTerms.checked) {     // 라벨이 체크 안되면                           
    elTermsHint.innerHTML = '사용권 계약에 동의해야 합니다.'; 
    event.preventDefault();  // 이벤트 막음 = 기본동작취소                        
  }
}


elForm.addEventListener('submit', checkTerms, false); // elform에 submit이라는 event발생, checkTerms함수 호출
elSelectPackage.addEventListener('change', packageHint, false); // elSelectPackage change event발생, packageHint