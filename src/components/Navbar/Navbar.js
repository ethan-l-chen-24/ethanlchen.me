import React from 'react'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>logo</h1>
                </NavLink>  
                <Bars />
                <NavMenu>
                    <NavLink to="/aboutMe" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/aboutMe" activeStyle>
                        Education
                    </NavLink>
                    <NavLink to="/aboutMe" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/aboutMe" activeStyle>
                        Slice of Life
                    </NavLink>
                    <NavLink to="/aboutMe" activeStyle>
                        Abilities
                    </NavLink>
                    <NavLink to="/aboutMe" activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>  
        </>
    )
}

export default Navbar
