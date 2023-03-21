import React from 'react'

const Body = () => {
    return (
        <>
            {/* this is for first body part  */}
            <section className="body1">
                {/* sub body part content  */}
                <div className="content-body1">
                    <h1>It was never this Easy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto magnam molestiae quo iste consequuntur inventore consectetur nihil nostrum aliquid?</p>
                    <button>Get Started</button>
                </div>

                {/* sub body part image  */}
                <div className="image-body1">
                    <img width={100} src="https://mohd-kamleen.web.app/image/kamleen.png" alt="error" />
                </div>
            </section>

            {/* this is for second body part  */}
            <section className="body2">
                {/* sub body part image  */}
                <div className="image-body2">
                    <img width={100} src="https://mohd-kamleen.web.app/image/kamleen.png" alt="error" />
                </div>

                {/* sub body part content  */}
                <div className="content-body2">
                    <h1>It was never this Easy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto magnam molestiae quo iste consequuntur inventore consectetur nihil nostrum aliquid?</p>
                    <button>Get Started</button>
                </div>
            </section>

            {/* third body part for skills  */}
            <section className="body3">
                <h3>Filter Mentors by your objective or Field</h3>
                <div className="objective-list">
                    <button>UI/UX</button>
                    <button>Front-End Dev.</button>
                    <button>Back-End Dev.</button>
                    <button>Data manager</button>
                    <button>Sales Ex.</button>
                    <button>Product Mana.</button>
                    <button>Growing SaaS</button>
                    <button>Building Brand</button>
                    <button>Human Res</button>
                    <button>Operations</button>
                    <button>Entreprenur</button>
                    <button>Search More</button>
                </div>
            </section>

            {/* this is for body part 4th section  */}
            <section className="body4">
                <div>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat voluptas molestiae eius. Aut culpa temporibus sequi quidem, labore qui deleniti facilis modi quod, eius at perferendis blanditiis vero?</p>
                </div>
                <div></div>
                <div></div>
                <div>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, odit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat voluptas molestiae eius. Aut culpa temporibus sequi quidem, labore qui deleniti facilis modi quod, eius at perferendis blanditiis vero?</p>
                </div>
            </section>

            {/* its for 5th body sention  */}
            <section className="body5">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime consequuntur ut, enim id excepturi ratione.</p>

                {/* people list of success  */}
                <div className="succ-pep-list">
                    {/* this is card for peaople list  */}
                    <div className="pep-card">
                        {/* card header  */}
                        <div className="card-header">
                            <img src="" alt="" />
                            <b>Jatlin Soni, Mentee</b>
                        </div>

                        {/* card content  */}
                        <div className="card-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, magnam! Hic maxime dolores iure beatae, fugit minima tempore sit possimus.
                        </div>
                    </div>
                </div>

                {/* coutes part  */}
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus amet aut consequuntur, iure dolorum voluptates sunt atque voluptate illo sapiente consectetur facere unde doloribus ipsum id exercitationem possimus quae aliquid.</h2>
            </section>

        </>
    )
}

export default Body