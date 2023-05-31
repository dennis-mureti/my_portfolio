import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

    return (
        <>
        <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A' ,'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}/>
            </h1>
            <p>Throughout my career, I have successfully developed and deployed a wide range of applications across various industries, including e-commerce, finance, healthcare, and entertainment. I am well-versed in multiple programming languages and frameworks, allowing me to adapt quickly to new technologies and deliver efficient and scalable solutions.</p>
            <p>I am Proficient in developing mobile apps for iOS and Android platforms using industry-standard languages and frameworks such as React Native, and Flutter. Additionally, I have extensive experience in deploying mobile applications to various hosting platforms, including Google Play Store and Apple App Store. I am well-versed in the app submission process, ensuring compliance with platform guidelines and maximizing app visibility and discoverability.</p>
            <p>In QA testing, I have hands-on experience with various testing methodologies, including manual testing, automated testing, and regression testing. I am skilled in using industry-standard testing tools and frameworks to perform functional, performance, and usability testing. My attention to detail and analytical mindset enables me to identify potential issues and provide actionable recommendations for improvement.</p>
            <p>In addition to QA testing, I have a proven track record in technical writing. I am adept at creating clear and concise documentation, including user manuals, API documentation, release notes, and troubleshooting guides. I excel at translating complex technical concepts into easily understandable language for both technical and non-technical audiences.</p>
            <p>I am excited about the opportunity to collaborate on challenging projects, leveraging my skills and expertise to drive innovation and deliver results. If you are looking for a dedicated and versatile software developer who can bring your ideas to life, I am confident that I am the right person for the job. </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faAndroid} color='#DD0031' />
                    </div>
                    <div className='face7'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About