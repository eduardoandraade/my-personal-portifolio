import React, { useState } from 'react'
import './header.css';

const Header = () => {

    /* ====== Change Background Header ====== */
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80 ) header.classList.add
        ("scroll-header");
        else header.classList.remove("scroll-header")
    })

    /* ====== Toggle Menu ====== */
    const [ Toggle, showMenu ] = useState(false);


  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav__logo active-link'>
                Dudu
                <span className='details__title'>.</span>
            </a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li  className="nav__item">
                        <a href="#home" className='nav__link'>
                            <i className='uil uil-estate nav__icon'></i> Inicio
                        </a>
                    </li>

                  
                    <li className="nav__item">
                        <a href="#skills" className='nav__link'>
                            <i className='uil uil-file-alt nav__icon'></i> Habilidades
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className='nav__link'>
                            <i className='uil uil-briefcase-alt nav__icon'></i> Serviços
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#projects" className='nav__link'>
                            <i className='uil uil-scenery nav__icon'></i> Projetos
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className='nav__link'>
                            <i className='uil uil-message nav__icon'></i> Contato
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)} ></i>
            </div>

            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}

export default Header