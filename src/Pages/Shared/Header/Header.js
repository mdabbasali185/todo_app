import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'
import auth from '../../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    const logOutHandler = event => {
        event.preventDefault()
        signOut(auth)
        localStorage.removeItem('token')
    }
    return (
        <div>
            <Navbar className="header py-0" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <h1 className='word'><span className='text-light fst-italic'>Todo</span>App</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "link-active link" : "link"
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </Nav>



                            {user ? (
                                <>
                                    <Nav>
                                        <NavLink
                                            onClick={logOutHandler}
                                            className="link"
                                            to="/"
                                        >
                                            LogOut
                                        </NavLink>
                                    </Nav>
                                </>
                            ) : (
                                <>
                                    <Nav>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive ? "link-active link" : "link"
                                            }
                                            to="/login"
                                        >
                                            LogIn
                                        </NavLink>
                                    </Nav>

                                    <Nav>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive ? "link-active link" : "link"
                                            }
                                            to="/signup"
                                        >
                                            Signup
                                        </NavLink>
                                    </Nav>
                                </>

                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;