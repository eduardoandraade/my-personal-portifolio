import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
        <i className='bx bx-award about__icon'></i>

            <h3 className="about__title">Experiência</h3>
            <span className='about__subtitle'>1 Ano</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon'></i>

            <h3 className="about__title">Entregas</h3>
            <span className='about__subtitle'>+5 Projetos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>

            <h3 className="about__title">Suporte</h3>
            <span className='about__subtitle'>Online 24h/7dia</span>
        </div>
    </div>
  )
}

export default Info