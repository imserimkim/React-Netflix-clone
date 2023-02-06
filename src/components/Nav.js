import React from 'react';
import './Nav.scss';
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from 'react'; 

export default function Nav() {
    const [show, setshow] = useState(false); 
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {      //리스너 등록 
        window.addEventListener("scroll",()=>{
            /* first; */
            if (window.scrollY > 50) {
                setshow(true); 
            } else {
                setshow(false); 
            }
        });

        return () => {
            /* second */
            window.removeEventListener("scroll", () => {});
            console.log(setshow);
        };
    }, [/*third*/]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
      };

    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img
                alt='Netflix logo' 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/300px-Netflix_2014_logo.svg.png?20140810085105"
                className='nav_logo'
                onClick={() => window.location.href = "/"}
            />

                
            <input
                value={searchValue}
                onChange={handleChange}
                className="nav__input"
                type="text"
                placeholder="영화를 검색해주세요."
            />

            <img 
                alt="User logged"
                src="http://occ-0-3077-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTtt4ubPy0MpDz_mLS9xjaHT7a8NLpcJNvPDzEo-LZoTvmwsWCni05Eo_zlCzkJmc1ORSBcISNDKQbEQE7RDl6pnkmVOrrs.png?r=214"
                className='nav_avatar'
            />
        </nav>
    );
}
