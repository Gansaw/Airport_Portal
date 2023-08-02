import React from "react";

// The Navigation Component
const Navigation = () => {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <a href="./" className="contrast" onClick={(event) => event.preventDefault()}>
            <strong>사이트정보</strong>
          </a>
        </li>
        {/* Additional links go here */}
      </ul>
      {/* Rest of the navigation items */}
    </nav>
  );
};

// The Header Component
const Header = () => {
  return (
    <header className="container">
      <hgroup>
        <h1>세계 공항 포털 사이트</h1>
        <h2>세계 공항의 정보를 모아둔 포털입니다. 다양한 공항정보를 만나볼 수 있습니다.</h2>
      </hgroup>
      <p>
        <button type="button" onClick={() => window.location.href = '/'}>
          사이트 둘러보기
        </button>
      </p>
    </header>
  );
};

// The Main Content Component
const MainContent = () => {
  return (
    <main className="container">
      <div className="grid">
        <section>
          본 사이트에서는 세계 각국의 공항 정보를 얻을 수 있으며, 사람들의 인증샷과 지도 정보를 얻을 수 있습니다.
          회원가입을 하고 사이트를 누비며 세계를 탐험해 보세요.<br />
          This site provides information on airports around the world, with photos of people and maps.
          Sign up to explore the site and explore the world.<br />
          このサイトでは、世界中の空港の情報を、人物の写真と地図で紹介しています。登録して世界を探検しよう.<br />
          本网站提供世界各地机场的信息，并附有人物照片和地图。注册后即可浏览该网站并探索世界.<br />
          Este sitio ofrece información sobre aeropuertos de todo el mundo, con fotos de personas y mapas. Regístrate para explorar el sitio y explorar el mundo.<br />
          Questo sito fornisce informazioni sugli aeroporti di tutto il mondo, con foto di persone e mappe. Iscrivetevi per esplorare il sito ed esplorare il mondo.<br />
          Diese Website bietet Informationen über Flughäfen auf der ganzen Welt, mit Fotos von Menschen und Karten. Melden Sie sich an, um die Website zu erkunden und die Welt zu entdecken.
        </section>
        <aside>
        <div class="container">
        <article>
            <hgroup>
                <h2>가입하기</h2>
                <h6>가입하여 많은 정보와 프로모션 혜택을 얻어보세요</h6>
            </hgroup>
            <button type="button" onClick={() => window.location.href = '/signup'}>
                회원가입 하러가기
            </button>
        </article>
      </div>
        </aside>
      </div>
    </main>
  );
};

// The Footer Component
const Footer = () => {
  return (
    <footer className="container">
      <small>
        Built with <a href="https://github.com/Gansaw">최호진</a> • <a href="https://github.com/Byeonghee-son">손병희</a> • 
        <a href="https://github.com/Gansaw/K-Project/tree/front-end/src">Source code</a>
      </small>
    </footer>
  );
};

// The main App Component
const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;