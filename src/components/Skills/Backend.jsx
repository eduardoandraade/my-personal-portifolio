import React from 'react'

const Backend = () => {
  return (
    <div className='skills__content'>
    <h3 className="skills__title">Back-end Developer</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bxl-nodejs' ></i>

                <div>
                    <h3 className="skills__name">Node Js</h3>
                    <span className='skills__level'>Básico</span>
                </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-data' ></i>

                <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className='skills__level'>Básico</span>
                </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-firebase' ></i>

                <div>
                    <h3 className="skills__name">Firebase</h3>
                    <span className='skills__level'>Básico</span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bxl-aws'></i>

                <div>
                    <h3 className="skills__name">AWS Service</h3>
                    <span className='skills__level'>Básico</span>
                </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Backend