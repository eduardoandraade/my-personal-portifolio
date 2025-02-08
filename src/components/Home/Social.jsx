import React from 'react'

const Social = () => {
  return (
    <section className='home__social'>
        <a href='https://instagram.com/eduardoandraade' className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-instagram"></i>
        </a>

        <a href='https://www.linkedin.com/in/eduardoandraade/' className="home__social-icon" target='_blank' rel="noreferrer">
          <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href='mailto:eduardoandraade@outlook.com?subject=Assunto/Nome do Projeto$body=Escreva detalhadamente sobre o projeto e deixe seu contato!' className="home__social-icon" target='_blank' rel="noreferrer">
          <i class="uil uil-envelope-alt"></i>
        </a>
    </section>
  )
}
export default Social