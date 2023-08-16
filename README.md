frontend
  + 0724-0725 공항 데이터 검색 및 홈페이지 구상
  + 0726 공항 데이터 DB 구축 및 부가기능 구상
  + 0727 공지사항 및 갤러리 DB 구축
  + 0728 백엔드 작업 - notice
  + 0731 백엔드 작업 - gallery
  + 0801 백엔드 작업 - members(user)
  + 0802 프론트 보조 - Api를 활용한 환율계산기 제작(Cors오류로 인해 실패)
  + 0803 프론트 보조 - 웹 크롤링을 통하여 환율 정보 수집 후 환율계산기 재구성(구현 완료) <br/>
                      Top10 공항리스트 구현(DB, 프론트)
  + 0804 작업x(코로나 의심)
  + 0807 백엔드 작업 - securityConfig 및 Jwt1(구현 중)
  + 0807 백엔드 작업 - securityConfig 및 Jwt2(Authorize 제외 구현 완료)
  + 0808 프론트 보조 - Notice 및 Gallery 화면 구현 완료
  + 0809-0810 작업x(제4회 부산해커톤 대회)
  + 0811 프론트 포조 - getNoticeList, getGalleryList 삭제, insertNotice, insertGallery 구현. 사이트정보에 Header 추가하여 자연스러운 화면 구성
  + 0812 백엔드 작업 - 로그인 구현 검토
  + 0814 백엔드 작업 - Notice 및 Gallery 부분 수정 => 공지사항 최종 구현 완료, 갤러리는 구현 중(imageUrl을 이용하여 이미지를 출력할 예정) <br/>
                      로그인을 아직 구현을 못함 (물어보려고 했는데 다 휴가가서 사람이 없었음...)
  + 0815 백엔드 작업 - 로그인 구현 성공, 로그인 유지되는 것도 확인했지만 새로고침(F5)를 누르면 로그아웃이 되는 현상이 있음 <br/>
                      글쓰기를 누르면 Gallery가 입력되는 것도 확인(insertGallery 구현) 이미지가 나오는 것도 확인하긴 했는데 안이쁘게 나와서 수정 필요 <br/>
                      이제 남은 걸 구현해야하는데 updateGallery와 deleteGallery는 구현될 것으로 예상되는데 getGallery가 정상적으로 동작하지 않음. <br/>
                      정확히는 서버에서 restApi를 구현해서 localhost:8080/gallerys를 json형식으로 만들었는데 gallerys/id가 적용이 안됨 <br/>
                      근데 또 gallerys?id=는 적용이 됨. Notice랑 동일하게 코드를 짰는데 Notice는 되고 Gallery는 안됨... 해결 못할 듯 <br />
                      Airport DB를 어떻게 쓰면 좋을까 생각했는데 그냥 공항 정보에 DB에 있는 공항들이 다 나오도록 하면 좋을 듯? 시간 없으면 버립시다.<br/>
                      내일은 이제 /user 이랑 /admin을 url에 넣어서 권한을 부여할 예정 (Gallery는 원인 불명임...)
    
