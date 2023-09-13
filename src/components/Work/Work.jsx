import React from 'react'
import './work.css'
import Works from './Works'

const Work = () => {
  return (
    <section className="work section" id="projects">
        <h2 className="section__title">Projetos
            <span className='details__title'>.</span>
        </h2>
        <span className="section__subtitle">Trabalhos Recentes</span>

        <Works />
    </section>
  )
}

export default Work