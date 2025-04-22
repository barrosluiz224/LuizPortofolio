import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./p1.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>story-trails</h3>
                            <p>
                                Story telling website
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> Bootstrap
                                <span> -</span> TypeScript
                                <span> -</span> Solidity
                                <span> -</span> NodeJS
                                <span> -</span> MongoDB
                            </p>
                            <a href="https://story-trails.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./p2.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Wear Euprising</h3>
                            <p>
                                Wear Euphoria website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> jQuery
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://www.weareuprising.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./p3.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>CarlyLeandco</h3>
                            <p>
                                Carly Leandco website
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> NodeJS
                                <span> -</span> ExpressJS
                                <span> -</span> Sequelize
                                <span> -</span> PostgreSQL
                            </p>
                            <a href="https://www.carlyleandco.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./p4.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>metaverse istitutomarangoni</h3>
                            <p>
                                metaverse istitutomarangoni website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://metaverse.istitutomarangoni.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./p5.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>qclay design</h3>
                            <p>
                                qclay design website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://qclay.design/projects/p12/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            {/* <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div> */}
        </section>

    )
};
export default React.memo(Project);