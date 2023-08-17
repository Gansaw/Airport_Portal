# Mini-Project
K-Digital 3기 훈련 과정 중 미니프로젝트를 진행하면서 수행한 프로젝트물입니다.

It is a project carried out during the mini-project during the 3rd K-Digital training course.

제작자 : 최호진, 손병희

Made by Choi HoJin, Son ByeongHee

## Getting Started
정상적으로 프로그램을 동작하게 하기 위해서는 다음과 같은 과정을 거쳐야 합니다.

Before operating program, you need to accomplish the following step.

### 1. Prerequired
+ [React](https://react.dev/) (Front-End)
+ [Springboot](https://spring.io/tools) (Back-End)
+ [MySQL](https://www.mysql.com/) (Database)  
+ [Python](https://python.org/) (Web Crawling)
+ [VS Code](https://code.visualstudio.com/) (React & Python Workspace)
+ [Eclipse](https://www.eclipse.org/downloads/) (SpringBoot Workspace)

### 2. Data Usage
+ [World Airport Info](https://www.data.go.kr/data/3051587/fileData.do?recommendDataYn=Y) (국토교통부 세계 공항 정보)
+ [Exchange Rates](https://m.stock.naver.com/marketindex/home/exchangeRate/exchange) (네이버 환율)
+ [Top10 Airport](https://www.data.go.kr/data/3051587/fileData.do?recommendDataYn=Y) (SKYTRAX 선정 세계 공항 순위)

### 3. Data in MySQL
![DB ER-Diagram](https://github.com/Gansaw/K-Project/assets/86204430/11319c6d-0fe8-4dd0-bac7-409f1f0b05ee)
+ airport : 공항 테이블 (World Airport Info)
+ rate : 환율 테이블 (Exchange Rates)
+ top10 : 10위 공항 테이블 (Top10 Airport)
+ member : 회원 테이블
+ notice : 공지사항 테이블
+ gallery : 갤러리 테이블

### 4. Webpage Consists
+ header
![header](https://github.com/Gansaw/K-Project/assets/86204430/7e8b6b16-a477-4698-9eca-b3408d492537)
+ main
![main1](https://github.com/Gansaw/K-Project/assets/86204430/16bc8cb1-a19a-4a43-a47b-64a55b6cc311)
![main2](https://github.com/Gansaw/K-Project/assets/86204430/38851019-5c64-4396-aa6b-1084c45214ed)
+ footer
![footer](https://github.com/Gansaw/K-Project/assets/86204430/446affa3-a9b7-42d9-b97e-c69136fdf977)
+ siteinfo
![siteinfo](https://github.com/Gansaw/K-Project/assets/86204430/ab5b35ce-3515-4859-b941-239c15aa3626)
+ mapapi
![mapapi](https://github.com/Gansaw/K-Project/assets/86204430/85473936-f30f-4ba4-8c13-b6ccd7d06657)
+ airportinfo
![airportinfo](https://github.com/Gansaw/K-Project/assets/86204430/31a3f092-485e-47a2-8205-9b6f7c073fa8)
+ notice
![notice](https://github.com/Gansaw/K-Project/assets/86204430/b5311016-1c75-4f15-b400-cbfea0e94868)
+ gallery
![gallery](https://github.com/Gansaw/K-Project/assets/86204430/805e5b08-270c-4ef7-a0d4-72f3820d2a9d)
+ login
![login](https://github.com/Gansaw/K-Project/assets/86204430/7cc64423-af13-4675-bfc6-9bc942412a04)
+ signup
![signup](https://github.com/Gansaw/K-Project/assets/86204430/5dd0d4f6-be93-494f-b0c7-93192eb6a07b)


### 5. Project Includes
+ 웹사이트를 구현하는 프로젝트로 세계공항포털을 웹사이트로 구현하였다.
+ Twt 토큰을 이용하여 로그인 및 회원가입 기능을 구현하였다.
+ 사이트정보 : 세계공항포털 사이트에 관한 정보를 다양한 언어로 나타내고 있다.
+ 지도정보 : api를 활용하여 검색 시 해당 공항의 위치를 시각화한다.
+ 공항정보 : 공공데이터에서 가져온 공항 정보 데이터를 DB에 저장하였고 검색 시 검색어가 포함된 공항 정보를 표기한다.
+ 공지사항 : 관리자가 올리는 게시판이다. (권한 적용이 잘 안되어 권한을 적용시키지 않은 상태)
+ 갤러리 : 로그인을 한 사용자가 사진을 올리는 게시판이다. (라우팅 문제로 글쓰기를 제외한 나머지 기능 막아둔 상태)
+ 환율 계산기 : api를 활용하려 했으나 CORS 문제로 인하여 파이썬을 이용한 웹크롤링을 통해 네이버 환율을 가져와서 DB에 저장 후 구현하였다.
+ TOP10 공항 : 스카이트랙스(Skytrax)라는 공신력 있는 사이트에서 파이썬을 이용한 웹크롤링을 하여 DB에 저장 후 구현하였다.
+ 이미지 슬라이드를 구현하여 메인 화면에 공항과 관련된 사진을 보여준다.
