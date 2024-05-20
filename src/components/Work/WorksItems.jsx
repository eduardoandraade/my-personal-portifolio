import React from 'react'

const WorksItems = ({item}) => {

  const handleImageClick = () => {
    window.open(item.href, '_blank')
  };

  const isWixRepo = item.repo.includes('wix');
  const isShopifyRepo = item.repo.includes('shopify');

 
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
            {isWixRepo ? 'Criado na' : isShopifyRepo ? 'Criado na' : 'Repositório'}
            {isWixRepo ? (
            <i class='bx bxl-wix work__button-icon'></i>
          ) : isShopifyRepo ? (
            <i class='bx bxl-shopify work__button-icon'></i>
          ) : (
            <i className="bx bxl-github work__button-icon"></i>
          )}
        </a>
        </div>
        
    </div>
  )
}

export default WorksItems