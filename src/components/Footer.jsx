import React from 'react'

const Footer = () => {
    return (
        <>
            {/* footer part  */}
            <section className='footer'>
                {/* sub footer for left  */}
                <div className="sub-footer">
                    <h4>logo</h4>
                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, odio distinctio et facilis ratione tempore aperiam voluptate, ea nihil dicta porro voluptatibus consequuntur laboriosam eligendi dolore necessitatibus itaque rerum nesciunt harum iusto exercitationem blanditiis. Sit laborum, exercitationem maiores excepturi, rem consequuntur quisquam libero tenetur minima voluptate possimus nam. Nam, voluptatem.</small>
                </div>

                {/* sub footer for middle  */}
                <div className="sub-footer">
                    <div className="comp-link">
                        <a href="#">Home</a>
                        <a href="#">Career</a>
                        <a href="#">About</a>
                    </div>
                    <p>Copyright &copy; Growbinar. All right reserved.</p>
                </div>

                {/* footer social parts  */}
                <div className="sub-footer">
                    <div className="social-icon">
                        <i>F</i>
                        <i>I</i>
                        <i>IN</i>
                    </div>
                    <div className="tems-link">
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms Of Use</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer