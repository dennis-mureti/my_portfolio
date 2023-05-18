import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/mureti.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    const nameArray = ['u', 'r', 'e', 't', 'i']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

    useEffect(() => {
         setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    //   useEffect(() => {
    //     setLetterClass('text-animate-hover')
    //   }, []);

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img src ={LogoTitle} alt ='developer' className='logo-em' />  
            <AnimatedLetters letterClass = {letterClass}
            strArray={nameArray}
            idx={15} />
            <br/>
            <AnimatedLetters letterClass = {letterClass}
            strArray={jobArray}
            idx={22} />
                </h1> 
                <h2> Software Developer / Technical Writer / QA Engineer / Flutter expert / Javasript Developer</h2>
                <Link to="/contact" className = "flat-button ">CONTACT ME</Link>
        </div>
        <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
     )
}
export default Home;