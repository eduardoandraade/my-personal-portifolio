import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const [ toggleState, setToggleState ] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="services section" id="services">
        <h2 className='section__title'>Serviços
            <span className='details__title'>.</span>
        </h2>
        
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i class='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>
                        UI<br /> Design
                    </h3>
                </div>

                <span className='services__button' onClick={() => toggleTab(1)}>Ver mais
                <i class='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className="services__modal-title">UI Design</h3>
                        <p className="services__modal-description">Desenho interfaces de usuário atraentes e intuitivas para sites e soluções digitais, com o objetivo de aprimorar a experiência e a usabilidade do usuário.</p>
                    
                        <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">Crio layouts, cores, tipografia e elementos visuais.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">Desenvolvo padrões visuais e de identidade com a marca.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">Adapto a interface para diferentes dispositivos.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                
                                <p className="services__modal-info">Faço testes de funcionalidade e usabilidade.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                <i class="uil uil-brackets-curly services__icon"></i>
                    <h3 className='services__title'>
                        Desenvolvimento <br/> Web
                    </h3>
                </div>

                <span className='services__button' onClick={() => toggleTab(2)}>Ver mais
                <i class='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className="services__modal-title">Desenvolvimento Web</h3>
                        <p className="services__modal-description">Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.</p>
                    
                        <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">Eu desenvolvo interface de usuario</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">I created ux element interactions</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">I position your company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                <i class="uil uil-analysis services__icon"></i>
                    <h3 className='services__title'>
                        Marketing <br /> Digital
                    </h3>
                </div>

                <span className='services__button'onClick={() => toggleTab(3)}>Ver mais
                <i class='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className="services__modal-title">Marketing Digital</h3>
                        <p className="services__modal-description">Desenho interface de forma que ela seja clara, objetiva e principalmente intuitiva para o usuário.</p>
                    
                        <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">Eu desenvolvo interface de usuario</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">I created ux element interactions</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">I position your company brand</p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>

                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
};

export default Services