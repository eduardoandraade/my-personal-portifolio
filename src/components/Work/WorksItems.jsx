import React from 'react'

const WorksItems = ({item}) => {

  const handleImageClick = () => {
    window.open(item.href, '_blank')
  };

 
  return (
    <div className="work__card" key={item.id}>
        <img 
          src={item.image} 
          alt="Tela do projeto" 
          className='work__img' 
          onClick={handleImageClick}  
        />
        <h3 className='work__title'>{item.title}</h3>
        <div className='work__links'>
          <a href={item.href} className='work__button' target='_blank' rel="noreferrer">
            Deploy<i className="bx bx-world work__button-icon"></i>
          </a>

          <a href={item.repo} className='work__button' target='_blank' rel="noreferrer">
            Repositório <i className="bx bxl-github work__button-icon"></i>
          </a>
        </div>
        
    </div>
  )
}

export default WorksItems