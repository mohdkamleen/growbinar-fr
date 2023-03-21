import React from 'react'

const Banner = () => {
  return (
    <>
    {/* banner part  */}
        <section className="banner">
            {/* sub banner left part  */}
            <div className="sub-banner">
                <h2>Get a career GPS with the help from top mentors around the Globe</h2>
                <p>Get started to grow your career with mentors from the experienced people from the world's top organizations</p>
                <button>Explore by Expertise</button>
            </div>

            {/* sub banner right part  */}
            <div className="sub-banner">
                <img width={100} src="https://mohd-kamleen.web.app/image/kamleen.png" alt="error" />
                <img width={100} src="https://mohd-kamleen.web.app/image/kamleen.png" alt="error" />
                <img width={100} src="https://mohd-kamleen.web.app/image/kamleen.png" alt="error" />
                <img width={100} src="https://mohd-kamleen.web.app/image/kamleen.png" alt="error" />
            </div>
        </section>
    </>
  )
}

export default Banner