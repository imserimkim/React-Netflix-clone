// import './App.scss';
// import Nav from './components/Nav'; 
// import Banner from './components/Banner';
// import requests from './api/requests';
// import Row from './components/Row';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Banner />

//       <Row 
//         title="오직 넷플릭스에서"
//         id="NO"
//         fetchUrl={requests.fetchNetflixOriginals}
//         isLargeRow
//       />

//       <Row title="지금 뜨는 콘텐츠" id="TN" fetchUrl={requests.fetchTrending} />
//       <Row title="오늘 대한민국의 TOP 10" id="TR" fetchUrl={requests.fetchTopRated} />
//       <Row title="블록버스터 영화" id="AM" fetchUrl={requests.fetchActionMovies} />
//       <Row title="코미디 영화" id="CM" fetchUrl={requests.fetchComedyMovies} />

//       <Footer />
//       console.log(Banner);
//     </div>
//   );
//   }

// export default App;



import { Outlet, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes> 
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
