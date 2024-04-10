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

            <div className='home__sub-title'>
                <h2 className='home__sub-title-text'>
                    &lt; software engineer /&gt;
                </h2>
            </div>

            <section className='home__socials'>
                <a href='https://github.com/bebopdre' className='home__socials-social'>
                    <img className='home__socials-social-img' alt='GitHub' src={github} />
                </a>

                <p className='home__socials-separator'> | </p>

                <a href='https://www.linkedin.com/in/drevm/' className='home__socials-social'>
                    <img className='home__socials-social-img' alt='LinkedIn' src={linkedin} />
                </a>

                <p className='home__socials-separator'> | </p>

                <button onClick={() => window.location = 'mailto:drevmpro@gmail.com'} className='home__socials-social home__socials-social--button'>
                    <img className='home__socials-social-img' alt='E-mail' src={email} />
                </button>
            </section>

            <section className='home__buttons'>
                <div className='home__buttons-neon'>
                    {/* <span className='home__buttons-neon--1'></span> */}
                    {/* <span className='home__buttons-neon--2'></span> */}
                    {/* <span className='home__buttons-neon--3'></span> */}
                    {/* <span className='home__buttons-neon--4'></span> */}
                    projects
                </div>
                <div className='home__buttons-neon'>
                    {/* <span className='home__buttons-neon--1'></span> */}
                    {/* <span className='home__buttons-neon--2'></span> */}
                    {/* <span className='home__buttons-neon--3'></span> */}
                    {/* <span className='home__buttons-neon--4'></span> */}
                    work history
                </div>
                <div className='home__buttons-neon'>
                    {/* <span className='home__buttons-neon--1'></span> */}
                    {/* <span className='home__buttons-neon--2'></span> */}
                    {/* <span className='home__buttons-neon--3'></span> */}
                    {/* <span className='home__buttons-neon--4'></span> */}
                    education
                </div>
            </section>
        </main>
    )
}

export default HomePage;