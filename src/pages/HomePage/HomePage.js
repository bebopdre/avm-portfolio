import './HomePage.scss';

import github from '../../assets/images/icons/icons8-github.svg';
import linkedin from '../../assets/images/icons/icons8-linkedin.svg';
import email from '../../assets/images/icons/icons8-email-50.png';

function HomePage() {
    return (
        <main className="home">
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>

            <section className='home__picture'>
                <div className='home__picture-img'></div>
                <div className='ship'>
                    <div className='ship-rotate'>
                        <div className='pod'></div>
                        <div className='fuselage'></div>
                    </div>
                </div>
            </section>

            <h1 className='home__title'>
                ANDREA MATOS
            </h1>

            <section className='home__socials'>
                <div className='home__socials-social'>
                    <img className='home__socials-social-img' alt='GitHub' src={github} />
                </div>

                <p className='home__socials-separator'> | </p>

                <div className='home__socials-social'>
                    <img className='home__socials-social-img' alt='LinkedIn' src={linkedin} />
                </div>

                <p className='home__socials-separator'> | </p>

                <div className='home__socials-social'>
                    <img className='home__socials-social-img' alt='E-mail' src={email} />
                </div>
            </section>

            <section className='home__buttons'>
                {/* <div className='home__buttons-button'>
                    PROJECTS
                </div>
                <div className='home__buttons-button'>
                    WORK HISTORY
                </div>
                <div className='home__buttons-button'>
                    EDUCATION
                </div>
                <div className='home__buttons-button'>
                    taking up space
                </div> */}
                <div className='home__buttons-neon'>
                    <span className='home__buttons-neon--1'></span>
                    <span className='home__buttons-neon--2'></span>
                    <span className='home__buttons-neon--3'></span>
                    <span className='home__buttons-neon--4'></span>
                    projects
                </div>
                <div className='home__buttons-neon'>
                    <span className='home__buttons-neon--1'></span>
                    <span className='home__buttons-neon--2'></span>
                    <span className='home__buttons-neon--3'></span>
                    <span className='home__buttons-neon--4'></span>
                    work history
                </div>
                <div className='home__buttons-neon'>
                    <span className='home__buttons-neon--1'></span>
                    <span className='home__buttons-neon--2'></span>
                    <span className='home__buttons-neon--3'></span>
                    <span className='home__buttons-neon--4'></span>
                    education
                </div>
            </section>
        </main>
    )
}

export default HomePage;