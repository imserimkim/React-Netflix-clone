import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import requests from '../api/requests';
import './Banner.scss'
import styled from "styled-components";
import MovieModal from './MovieModal';


const Banner = () => {
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        // 현재 상영중인 영화 정보를 가져오기
        const request = await axios.get(requests.fetchNowPlaying); 
        // 여러 영화 중 영화 하나의 ID 가져오기 
        setMovie(request.data.results);
        
        const movieId =
            request.data.results [
                Math.floor(Math.random() * request.data.results.length-1)
            ].id;
        const yestext = request.data.results.filter(text => text.overview !== "")
        let oneItem = yestext.filter(obj=>obj.id === movieId);
        
        // console.log(request.data.results)
            

        // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
        // console.log(movieId)
        const {data}  = await axios.get(`movie/${movieId}`,{
                params: {append_to_response: "videos"},
            }); 
        let NotFound = [785084,724495,1015963,980078,987750,846433,842544,955991,758009,1035806,1013870];
        console.log(movieId)
        if(  NotFound.includes(movieId)  ){
            fetchData();
            return;
        }
                setMovie(oneItem.concat(data.videos.results));
            

        }   

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    //모달생성 
    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }; 


    // console.log('movie', movie);
    if(movie.length){
        if (!isClicked) {
        
            return (
                <header 
                    className='banner'
                    style={{
                        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie[0].backdrop_path}")`,
                        backgroundPosition: "center top",
                        backgroundSize: "cover",
                        // textAlign: "center"
                    }}
                >
                    <div className='banner_contents'>
                        {/* <img src={`"https://image.tmdb.org/t/p/original${movie.backdrop_path}.jpg`} /> */}
                        <h1 className='banner__title'>{movie[0].title || movie[0].name || movie[0].original_name}</h1> 
            
                        <div className='banner_buttons'>
                            {/* { 동영상이 있다면?  </button> :null}*/ }
                            <button className='banner_button play' onClick={() => setIsClicked(true)}>
                                ▶ 재생</button> 

                            
                            <button className='banner_button info'  onClick={()=> handleClick(movie)}>
                                <div className='info-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill='white' viewBox='0 0 48 48'>
                                        <path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/>
                                    </svg>
                                </div>상세 정보
                        {modalOpen && <MovieModal {...movieSelected} setModalOpen={setModalOpen} />}
                            </button>
                        </div>
            
                        <h2 className='banner_description'>{truncate(movie[0]?.overview, 100)}</h2>
                    </div> 
            
                    <div className='banner--fadeBottom' />
                    
                </header>

            );

        } else {
            if(movie.length==1){ 
                return (
                <>
                    <AlertContainer>
                        <AlertMessage>
                            🚫 영상을 제공할 수 없습니다.
                        </AlertMessage>
                        <ReturnBtn onClick={() => window.location.reload()}>돌아가기</ReturnBtn>
                    </AlertContainer>
                </>
                )}
            return(
                <>
                    <Container>
                        <HomeContainer>
                            <Iframe 
                            width="640"
                            height="360" 
                            src={`https://www.youtube.com/embed/${movie[1].key}?controls=0&autoplay=1&loop=l&mute=1&playlist=${movie[1].key}`} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="autoplay; fullscreen" 
                            allowfullscreen
                            ></Iframe>
                        </HomeContainer>
                    </Container>
                    
                </>
            )
            console.log("videos");
        }
    }else{return(<> 데이터가 없습니다. </>)}
}

// iframe
const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after {
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

// style-components 
const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction : column;
        width: 100%;
        height: 100vh;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const AlertContainer = styled.div`
    width: 100%;
    height: 100vh;
`

const AlertMessage = styled.div`
    color: #fff;
    font-size: 3rem; 
    font-weight: bolder;
    text-algin: center; 
    position: absolute; 
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
`;

const ReturnBtn = styled.a`
    color: #ddd; 
    font-size: 1.5rem; 
    border-bottom: 1px solid #ddd;
    cursor:pointer; 
    padding: 8px;
    position: absolute; 
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
    &:hover{
        color : #B81D24;
        background-color: rgba(0,0, 0, 0.8);
        border-bottom: 1px solid #B81D24;
        border-radious: 10%;
        transition: 0.7s easy-in-out;
    }
`; 

export default Banner





// import axios from "../api/axios";
// import React, { useEffect, useState } from "react";
// import requests from "../api/requests";
// import "./Banner.scss";
// import styled from "styled-components";
// import MovieModal from './MovieModal';


// export default function Banner() {
//     const [movie, setMovie] = useState([]);
//     const [isClicked, setIsClicked] = useState(false);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [movieSelected, setMovieSelected] = useState({});

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         // 현재 상영중인 영화 정보를 가져오기(여러 영화)
//         const request = await axios.get(requests.fetchNowPlaying);

//         // 여러 영화 중 영화 하나의 ID를 가져오기
//         const movieId =
//         request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//         ].id;

//         // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
//         const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
//         params: { append_to_response: "videos" },
//         });
//         setMovie(movieDetail);
//     };

//     const truncate = (str, n) => {
//         return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//     };

//         //모달생성 
//         const handleClick = (movie) => {
//             setModalOpen(true);
//             setMovieSelected(movie);
//         }; 


//     console.log('movie',movie);

//     if (!isClicked) {
//         return (
//         <header
//             className="banner"
//             style={{
//             backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
//             backgroundPosition: "top center",
//             backgroundSize: "cover",
//             }}
//         >
//             <div className="banner_contents">
//             <h1 className="banner__title">
//                 {movie.title || movie.name || movie.original_name}
//             </h1>

//             <div className="banner_buttons">
//                 <button
//                 className="banner_button play"
//                 onClick={() => setIsClicked(true)}
//                 >
//                 ▶ 재생 
//                 </button>

//                 <button className='banner_button info'  onClick={()=> handleClick(movie)}>                                
//                     <div className='info-icon'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' fill='white' viewBox='0 0 48 48'>
//                             <path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/>
//                         </svg>
//                     </div>상세 정보
//                         {modalOpen && <MovieModal {...movieSelected} setModalOpen={setModalOpen} />}
//                 </button>          
//             </div>

//             <h1 className="banner_description">
//                 {truncate(movie.overview, 100)}
//             </h1>
//             </div>
//             <div className="banner--fadeBottom" />
//         </header>
//         );

//     } else {
//         if(movie.length==1){
//             return (
//                         <>
//                             <AlertContainer>
//                                 <AlertMessage>
//                                     🚫 영상을 제공할 수 없습니다.
//                                 </AlertMessage>
//                                 <ReturnBtn onClick={() => window.location.reload()}>돌아가기</ReturnBtn>
//                             </AlertContainer>
//                         </>
//                 )}
                
//                 console.log(movie.length);
//                     return(
//                         <>
//                             <Container>
//                                 <HomeContainer>
//                                     <Iframe 
//                                     width="640"
//                                     height="360" 
//                                     src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=l&mute=1&playlist=${movie[1].key}`} 
//                                     title="YouTube video player" 
//                                     frameborder="0" 
//                                     allow="autoplay; fullscreen" 
//                                     allowfullscreen
//                                     ></Iframe>
//                                 </HomeContainer>
//                             </Container>
//                         </>
//                     )
//         }
//     }

// // iframe
// const Iframe = styled.iframe`
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     opacity: 0.65;
//     border: none;

//     &::after {
//         content:"";
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//     }
// `

// // style-components 
// const Container = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction : column;
//         width: 100%;
//         height: 100vh;
// `;

// const HomeContainer = styled.div`
//     width: 100%;
//     height: 100vh;
// `;

// const AlertContainer = styled.div`
//     width: 100%;
//     height: 100vh;
// `

// const AlertMessage = styled.div`
//     color: #fff;
//     font-size: 3rem; 
//     font-weight: bolder;
//     text-algin: center; 
//     position: absolute; 
//     top: 45%;
//     left: 50%;
//     transform: translateX(-50%);
// `;

// const ReturnBtn = styled.a`
//     color: #ddd; 
//     font-size: 1.5rem; 
//     border-bottom: 1px solid #ddd;
//     cursor:pointer; 
//     padding: 8px;
//     position: absolute; 
//     top: 55%;
//     left: 50%;
//     transform: translateX(-50%);
//     &:hover{
//         color : #B81D24;
//         background-color: rgba(0,0, 0, 0.8);
//         border-bottom: 1px solid #B81D24;
//         border-radious: 10%;
//         transition: 0.7s easy-in-out;
//     }
// `; 