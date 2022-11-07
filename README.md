# 졸업 프로젝트
## FIT_EAT_UP_frontend
기본 Navigator 구조
![Navigator구조](./Navigator%20%EA%B5%AC%EC%A1%B0.png)


version 0.0.0 
+ 프로젝트 생성

version 0.0.1 
+ Input 컴포넌트 : 커스텀 컴포넌트 생성
+  로그인, 회원가입 UI 생성 및 구성

version 0.0.2 
+ 로그인, 회원가입 파일의 위치 변경
+ MyTextInput 컴포넌트 : version 0.0.1의 입력 컴포넌트 파일명 변경 후 일부 수정
+ MyButton 컴포넌트 : 커스텀 버튼 컴포넌트 생성(로그인, 회원가입, 마이페이지 화면 등에 사용예정)
+ 시작화면(splash.js) 생성 - 추후에 수정 혹은 삭제 예정

version 0.0.3
+ 로그인, 회원가입 UI 수정(커스텀 컴포넌트 적용)
<br><br>

version 0.1.0 
+ 내비게이션 기본 구조 생성 및 필요한 스크린 생성

version 0.1.1 
+ MyTextInput  컴포넌트 : editable 속성 추가(프로필 수정 화면에서 id, password는 수정 할 수 없도록 함)
+ MyProfileImage 컴포넌트 : 커스텀 이미지 컴포넌트 생성(사용자의 프로필 이미지)
+ 친구 추가 UI(AddFriend.js) 구성
+ 프로필 수정 UI(EditProfile.js) 구성
+ 회원가입 UI 수정 : MyProfileImage 컴포넌트 추가

version 0.1.2
+ 마이페이지 UI(MyPage.js) 생성 및 구성
+ 탭바 아이콘 변경 

version 0.1.3
+ 탭바 배경 색, 아이콘색 변경
+ HeaderBackButton 컴포넌트 : 헤더의 뒤로가기 버튼 컴포넌트 생성
+ FriendProfileImage 컴포넌트 : 친구목록 UI의 친구 프로필 이미지 컴포넌트 생성(MyProfileImage 컴포넌트와 크기만 다름)
+ 헤더 커스터마이즈
+ 친구목록 UI(Friend.js) 구성
+ 모든 스크린의 기본 배경  및 정렬 적용

version 0.1.4
+ 친구프로필 UI(FriendProfile.js) 구성
+ 좋아요 장소 리스트 UI(GoodList.js) 기본 구성(FlatList 사용)
+ 방문 장소 리스트 UI(VisitList.js) 기본 구성(FlatList 사용)
<br><br>

version 0.2.0
+ 회원가입 기능 구현

version 0.2.1
+ 로그인 기능 구현
+ 로그인 성공 시 AsyncStorage 에 토큰 저장
+ ~~로그인 후 MainStack으로 화면전환(다시 수정할 예정)~~ --> version 0.2.5에서 수정 완료

version 0.2.2
+ ResultImage 컴포넌트 : 결과 UI 에 사용될 이미지 컴포넌트 생성
+ 추천결과 UI(HomeResult.js) 구성
+ 검색 UI(Search.js) 구성(추가수정 예정)
+ 검색결과 UI(SearchResult.js) 구성
+ 검색결과 UI에서 해당 음식점 사진을 누르면 음식점 상세정보 UI(RestuarantInfo.js)로 이동
+ ~~SafeAreaView 적용~~

version 0.2.3 	
- ~~로그아웃 시 AsyncStorage에 저장된 토큰 삭제~~
- 로그아웃 기능 구현
- 로그인 에러메세지(id, password가 맞지 않으면 에러메시지 출력) 완료

version 0.2.4
- 회원가입 완료하면 로그인 화면으로 전환
- 로그인, 회원가입 버튼 비활성화 : 모든 입력값을 입력했을 때만 로그인 버튼, 회원가입 버튼 활성화 되도록 설정
- 회원가입 에러메세지 완료
- 회원가입 id, nickname 중복확인 완료

version 0.2.5
- 홈 UI(Home.js) 구성(추가수정 예정)
- 음식점 상세정보 UI(RestaurantInfo.js) ~~(진행 중)~~ -> 완료
- SafeAreaView 적용
- 좋아요 장소 리스트(GoodList.js), 가본 장소 리스트(VisitList.js)의 FlatList 디자인 수정


version 0.2.6
- ~~토큰 존재 여부에 따라 다른 화면이 렌더링 되도록 변경~~ -> context api의 사용자 정보 여부에 따라 변경되도록 수정
- expo-image-picker 사용하여 프로필 이미지 추가 기능 설정
- 전반적인 디자인 수정(Home.js 는 추가수정 필요)

version 0.2.7
- 사용자 정보 출력  --> context api로 관리
- 사용자 정보(nickname) 수정 기능 구현 --> context api로 관리
- 로그아웃 시 context api에 저장된 토큰 및 사용자 데이터 삭제

version 0.2.8
- 친구 추가, 삭제 기능 구현
- api 주소 관리 변경
- 친구목록에 친구정보 불러오기

version 0.3.0
- 카카오 api 사용해서 음식점 검색 기능 완료
- 카카오 daum 이미지 검색 api 사용해서 음식점 이미지 검색 완료
- 검색 결과화면 수정 및 완료 -> SearchResult.js 를 사용하지 않고 Search.js에 검색 결과 출력

version 0.3.1
- 음식점 상세정보 페이지 수정
- 음식점 상세정보 페이지에서 ‘좋아요’ or ‘가봤어요’ 버튼 클릭 시 서버에 보낼 데이터 수정 완료

version 0.3.2
- 사용자의 좋아요장소 리스트(GoodList), 가본장소 리스트(visitlist) 조회 기능 완료
- 각 리스트에서 특정 음식점 클릭 시, 해당 음식점 상세정보 페이지로 넘어가는 것까지 완료 -> 음식점 이미지는 수정 필요
- ~~사용자의 좋아요장소 리스트(goodlist), 가본장소 리스트(visitlist) 저장 기능 구현 중~~

version 0.3.3
- searchBar 컴포넌트 생성 및 수정
- 친구 추가 시 팝업창 오류 수정

version 0.3.4
- 사용자의 좋아요 장소 리스트(GoodList), 가본장소 리스트(VisitList) 저장, 삭제, 조회 완료
- 이미지 백엔드 서버에 넘기는 부분은 구현 중
- 좋아요, 가봤어요 장소 리스트 관련 내용 구현 완료

version 0.4.0
- styles.js, theme.js 생성(공통으로 사용되는 컬러와 style 관리)
- 모달 창을 사용하여 별점 부여 기능 추가
- 좋아요 버튼 or 가봤어요 버튼 클릭 시 별점을 부여할 수 있도록 수정
- 별점 데이터 백엔드 서버에 저장 완료

version 0.4.1
- 디자인 및 색 수정 진행
- Splash.js 삭제

version 0.4.2
- 별점 모달창에 취소 버튼 생성
- RestaurantInfo에서 백엔드에 저장된 별점 데이터 가져오기 구현 완료
- Result.js 삭제

version 0.4.3
- 나이 드롭다운 생성(AgeDropDown.js)
- 사용자 현재 위치 정보 얻기(expo-location)
- 현재 위치를 기반으로 장소 검색하도록 기능 추가
- HomeResult.js, Search.js 등 수정

version 0.5.0
- Home.js에서 OX 버튼 수정
- 회원가입에서 사용자 프로필이미지 서버에 저장 완료
- 음식점 데이터 중 이미지 서버에 저장 완료
- 사용자의 좋아요 or 가봤어요 리스트에 음식점 이미지 띄우기 완료
- 이미지 관련 문제 수정 완료

version 0.5.1
- Home.js 완료
- 프로필 이미지 수정 기능 완료

version 0.6.0
- 친구와 추천 맛집 검색 기능 연결 완료(결과 음식점 데이터는 아직 출력 X)
- 친구의 좋아요, 가봤어요 장소 가져오기 완료
- 친구 프로필(FriendProfile.js) 완료

version 0.6.1
- 친구 선택 기능에서 오류 수정