import React from 'react'

const Header = () => {
    return (
        <>
            {/* header part  */}
            <header>
                {/* logo header  */}
                <h1>logo</h1>

                {/* sub part of header  */}
                <div className="right-sub-header">

                    {/* serach bar  */}
                    <input type="text" />

                    {/* menu bar  */}
                    <menu>
                        <a href="#">Home</a>
                        <a href="#">Event</a>
                        <a href="#">Be a Mentor</a>
                    </menu>

                    {/* auth btns  */}
                    <div>
                        <button>Log in</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header