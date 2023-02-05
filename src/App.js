import './App.scss';
import Nav from './components/Nav'; 
import Banner from './components/Banner';
import requests from './api/requests';
import Row from './components/Row';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row 
        title="오직 넷플릭스에서"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="지금 뜨는 콘텐츠" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="오늘 대한민국의 TOP 10" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="블록버스터 영화" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="코미디 영화" id="CM" fetchUrl={requests.fetchComedyMovies} />

      <Footer />
      console.log(Banner);
    </div>
  );
  }

export default App;



// import axios from "axios";
// import { useState, useEffect } from "react";

// function App() {
//   const KEY = "dcb877c29782034e77c94aac785199a2"
//   const DATE = "20230121"
  

//   const [loading,setLoading] = useState(true);
//   const [movies,setMovies] = useState([])
//   const getMovies = async() => {
//     const json = await (
//        await fetch(
//       `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
//     )
//     ).json();
//     setMovies(json.boxOfficeResult.dailyBoxOfficeList);
//     console.log(json.boxOfficeResult.dailyBoxOfficeList);
//     setLoading(false);
//   }
//   useEffect(() => {
//    getMovies();
//   }, [])
//   return (
//     <div>
//       {
//         loading ? <h1>Loading…</h1> :
//         <div>
//             {movies.map(movie => 
//             <div key={movie.movieCd}>       
//               <h3>{movie.rank}위</h3>
//               <p>{movie.movieNm}</p>
//             </div>)} 
//         </div>
//       }
//     </div>
//   );
// }

// export default App;

