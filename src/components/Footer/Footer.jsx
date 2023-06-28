import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className='footer__title'>Dudu</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre Mim</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Serviços</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href='https://instagram.com/eduardoandraade' className="footer__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-instagram"></i>
            </a>

            <a href='https://www.behance.net/' className="footer__social-icon" target='_blank' rel="noreferrer">
                <i className="uil uil-behance-alt"></i>
            </a>

            <a href='https://github.com/eduardoandraade' className="footer__social-icon" target='_blank' rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; Eduardo Andrade. All rigths reserved.</span>
        </div>
    </footer>
  )
}

export default Footer