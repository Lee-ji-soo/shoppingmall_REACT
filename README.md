# shoppingmall_REACT
 shoppingmall with React<br>
 Javascript -> REACT 🔄

## lang
REACT, SCSS

## Sketch
<p>Structure</p>
<img width='800' height='auto' src='https://github.com/Lee-ji-soo/shoppingmall_REACT/blob/main/structure1.jpeg?raw=true'>
<p>Login Access Router</p>
<img width='800' height='auto' src='https://github.com/Lee-ji-soo/shoppingmall_REACT/blob/main/structure2.jpeg?raw=true'>

## Todo List
### REACT
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

#### Cart
- [x] cart Reducer 에서 저장된 cart 내역 카트 페이지에 랜더
- [ ] (각 수랑 * 가격)으로 전 상품 총합계 구하기
- [ ] 수량 변경 시 수량 변경 확인 문구창 띄우기
- [ ] 수량 변경 확인 시 전 상품 총합계 재출력

#### MyPage
- [ ] 포멧 (이름, 이메일, 전화번호, 주소)
- [ ] 주소 API 연동

### SCSS
- [x] Header
- [x] Main jumbo
- [x] Main Product
- [x] Login
- [x] Detail
- [ ] Cart
- [ ] MyPage
- [x] Footer
- [ ] header responsive
- [x] Main jumbo responsive
- [x] Main Product responsive
- [x] Login responsive
- [x] Detail responsive
- [ ] Cart responsive
- [ ] MyPage responsive
