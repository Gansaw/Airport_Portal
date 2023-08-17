# Mini-Project
K-Digital 3기 훈련 과정 중 미니프로젝트를 진행하면서 수행한 프로젝트물입니다.

It is a project carried out during the mini-project during the 3rd K-Digital training course.

제작자 : 최호진, 손병희

Made by Choi HoJin, Son ByeongHui

## Getting Started
정상적으로 프로그램을 동작하게 하기 위해서는 다음과 같은 과정을 거쳐야 합니다.

Before operating program, you need to accomplish the following step.

### Prerequired
+ [React](https://react.dev/) (Front-End)
+ [VS Code](https://code.visualstudio.com/) (React Workspace)
+ [Springboot](https://spring.io/tools) (Back-End)
+ [Eclipse](https://www.eclipse.org/downloads/) (SpringBoot Workspace)
+ [MySQL](https://www.mysql.com/) (Database)

### Project Includes
+ 웹사이트를 구현하는 프로젝트로 세계공항포털을 웹사이트로 구현하였다.
+ Twt 토큰을 이용하여 로그인 및 회원가입 기능을 구현하였다. (권한 구현 중)
+ 사이트정보 : 세계공항포털 사이트에 관한 정보를 다양한 언어로 나타내고 있다.
+ 지도정보 : api를 활용하여 검색 시 해당 공항의 위치를 시각화한다.
+ 공항정보 : 공공데이터에서 가져온 공항 정보 데이터를 DB에 저장하였고 검색 시 검색어가 포함된 공항 정보를 표기한다.
+ 공지사항 : 관리자가 올리는 게시판이다. (권한 구현 중)
+ 갤러리 : 로그인을 한 사용자가 사진을 올리는 게시판이다. (권한 구현 중, 라우팅 문제로 인한 상세 표시 및 수정 삭제 미구현)
+ 환율 계산기 : api를 활용하려 했으나 CORS 문제로 인하여 파이썬을 이용한 웹크롤링을 통해 네이버 환율을 가져와서 DB에 저장 후 구현하였다.
+ TOP10 공항 : 스카이트랙스(Skytrax)라는 공신력 있는 사이트에서 파이썬을 이용한 웹크롤링을 하여 DB에 저장 후 구현하였다.
+ 이미지 슬라이드를 구현하여 메인 화면에 공항과 관련된 사진을 보여준다.

### License
이 프로젝트는 MIT 라이선스가 적용되고 있습니다. 세부사항은 LICENSE.md를 참고하세요.

This project is licensed under the MIT License - see the LICENSE.md file for details
