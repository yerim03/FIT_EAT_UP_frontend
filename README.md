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
+ 좋아요 장소 리스트 UI 기본 구성(FlatList 사용)
+ 방문 장소 리스트 UI 기본 구성(FlatList 사용)

version 0.2.0
+ 회원가입 기능 구현

version 0.2.1
+ 로그인 기능 구현
+ 로그인 성공 시 AsyncStorage 에 토큰 저장
+ 로그인 후 MainStack으로 화면전환(다시 수정할 예정)

version 0.2.2
+ ResultImage 컴포넌트 : 결과 UI 에 사용될 이미지 컴포넌트 생성
+ 추천결과 UI(HomeResult.js) 구성
+ 검색 UI(Search.js) 구성(수정 예정)
+ 검색결과 UI(SearchResult.js) 구성
+ 검색결과 UI에서 해당 음식점 사진을 누르면 음식점 상세정보 UI(RestuarantInfo.js)로 이동
+ SafeAreaView 적용

version 0.2.3 	
- 로그아웃 시 AsyncStorage에 저장된 토큰 삭제
- 로그아웃 기능 구현
- 로그인 에러메세지(id, password가 맞지 않으면 에러메시지 출력)
- 회원가입 완료하면 로그인 화면으로 전환
- 로그인, 회원가입 버튼 비활성화 : 모든 입력값을 입력했을 때만 로그인 버튼, 회원가입 버튼 활성화 되도록 설정
