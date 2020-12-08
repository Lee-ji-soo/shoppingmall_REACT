# shoppingmall_REACT
 shoppingmall with React<br>
 Javascript -> REACT 🔄
## lang
REACT, SCSS
<br>
## 완성 페이지
1. 로그인페이지
- 로그인 시/ 비로그인 시 접근 페이지 설정
- 카트,마이페이지 비 로그인 시 접근 불가
- 메인,로그인페이지 비 로그인 시 접근 가능
<img src='https://raw.githubusercontent.com/Lee-ji-soo/shoppingmall_REACT/main/gif/shop1.gif'/>
<img height='auto' src='https://github.com/Lee-ji-soo/shoppingmall_REACT/blob/main/structure2.jpeg?raw=true'>
<br>
<br>

2. 메인페이지
- Sorting 기능 (낮은/높은 가격순)
<img src='https://raw.githubusercontent.com/Lee-ji-soo/shoppingmall_REACT/main/gif/shop2.gif'>
<br>
<br>
3. 디테일페이지
- 탭기능
- 이미지 스크롤
<img src='https://raw.githubusercontent.com/Lee-ji-soo/shoppingmall_REACT/main/gif/shop4.gif'>
<br>
<br>

4. 디테일페이지
- 선택한 수량대로 카트에 담기
<img src='https://raw.githubusercontent.com/Lee-ji-soo/shoppingmall_REACT/main/gif/shop3.gif'>
<br>
<br>

5. 카트페이지 
- 수량 변경시 & 삭제 버튼 클릭 시 확인 문구창 띄우기
- 카트에 담긴 상품*각수량 총 합 구하여 Total에 가격 표시
<img src='https://raw.githubusercontent.com/Lee-ji-soo/shoppingmall_REACT/main/gif/shop5.gif'>
<br>
<br>

6. 마이페이지 
- 주소 API 연동
- 선택 주소 내 정보로 저장하기
<img src='https://raw.githubusercontent.com/Lee-ji-soo/shoppingmall_REACT/main/gif/shop6.gif'>
<br>
<br>

7. mobile responsive<br>
<img width='200' src='https://raw.githubusercontent.com/Lee-ji-soo/shoppingmall_REACT/main/gif/shop7.gif'>
<br>
<br>

## Sketch
<p>Structure</p>
<img height='auto' src='https://github.com/Lee-ji-soo/shoppingmall_REACT/blob/main/structure1.jpeg?raw=true'>

## Todo List
### REACT

#### Header
- [x] nav 클릭 시 window location reload
- [ ] 해당 nav 표시 border-bottom

#### Login
- [x] id, password 공백 여부 확인
- [x] saga로 로그인 아이디 일치 여부 확인 [LOGIN,LOOUT,LOGIN_SUCCESS,LOGIN_FAILURE]
- [x] GuardRoute로 로그인 시, 페이지 이동 

#### Main
- [x] 메인 상단 페이지 request Animation Frames (useRef)<br>
     - 컴포넌트에서 return()과 같은 선상에 함수를 실행하면 안된다. <br>
     - 컴포넌트는 새로운 변화값이 있을 때마다, 지속적으로 return()함수를 실행한다. 이와 같은 선상에서 requestAnimationFrame을 실시하면, 이 함수가 중복 실행 될 위험이 있고 결국 overload될 수 있다.
- [x] 상품 렌더
- [x] 상품 '낮은 순부터|높은 순부터' 정렬 필터 적용
- [ ] 상품 '상의,하의,악세서리' 분류하기
- [ ] 상품 더 보기 버튼 클릭 시 API로 상품 불러오기
- [x] 상품 클릭 시 상세페이지로 연결 > 클릭 아이디 Detail 컴포넌트로 전달

#### Detail
- [x] 이미지 '다음|이전' 보기 기능
- [x] selection으로 수량, 색상, 사이즈 선택기능
- [x] 'Product|info|ship' 탭 기능
- [x] 최종 선택한 selection cart페이지 전달 (reducer)
- [x] 장바구니 추가 버튼 클릭 시 확인 버튼

#### Cart
- [x] cart Reducer 에서 저장된 cart 내역 카트 페이지에 랜더
- [x] 삭제 버튼 클릭 시 cart 에서 상품 제거
- [x] 삭제 버튼 클릭 시 삭제 확인 문구 띄우기 - 삭제/취소 버튼기능
- [x] 수량 변경 시 수량 변경 확인 문구창 띄우기
- [x] (각 수랑 * 가격)으로 전 상품 총합계 구하기

#### MyPage
- [x] 포멧 (이름, 이메일, 전화번호, 주소)
- [x] 주소 API 연동
- [x] 주소 팝업창으로 띄우기
- [x] 주소 선택 시, My page의 주소로 변경

### SCSS
- [x] Header
- [x] Main jumbo
- [x] Main Product
- [x] Login
- [x] Detail
- [x] Cart
- [x] MyPage
- [x] MyPage Juso
- [x] Footer
- [x] header responsive
- [x] Main jumbo responsive
- [x] Main Product responsive
- [x] Login responsive
- [x] Detail responsive
- [x] Cart responsive
- [x] MyPage responsive
- [x] MyPage Juso responsive

