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
+ dddd

### 4. Project Includes
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
