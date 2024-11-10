import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'todos' });
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [loadMoreButtonVisible, setLoadMoreButtonVisible] = useState(true);

  useEffect(() => {
    if (item.name === 'todos') {
      setVisibleProjects(projectsData.slice(0, startIndex + 4));
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setVisibleProjects(newProjects.slice(0, startIndex + 4));
    }
  }, [item, startIndex]);

  useEffect(() => {
    if (startIndex + 4 >= projectsData.length) {
      setLoadMoreButtonVisible(false);
    } else {
      setLoadMoreButtonVisible(true);
    }
  }, [startIndex]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
    setStartIndex(0);
  };

  const handleLoadMore = () => {
    setStartIndex((prevStartIndex) => prevStartIndex + 4);
  };

  return (
    <div>
      <div className='work__filters'>
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? 'active-work' : ''} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {visibleProjects.map((item, index) => {
          if (index < startIndex + 4) {
            return <WorksItems item={item} key={item.id} />;
          }
          return null;
        })}
      </div>

      {loadMoreButtonVisible && (
        <button onClick={handleLoadMore} className="load-more-button button button--flex work__buttons" style={{ margin: 'auto', marginTop: '20px' }}>
          Carregar Mais
        </button>
      )}
    </div>
  );
};

export default Works;
