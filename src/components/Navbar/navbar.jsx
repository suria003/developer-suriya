import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import portfolio from '../../image/portfolio.png';
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { animateScroll as scroll, scroller } from 'react-scroll';
import styled from "styled-components";

const Home = <FaHome />
const About = <FaInfoCircle />
const Contact = <MdContacts />

const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 4em;
    width: 100%;
    position: ${props => (props.scrolled ? 'fixed' : 'absolute')};
    top: 0%;
    background-color: ${props => (props.scrolled ? '#2C3E50' : 'transparent')};
    box-shadow: ${props => (props.scrolled ? '0px 0px 5px rgba(255, 255, 255, 0.3)' : 'none')};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    transition: background-color 0.3s, box-shadow 0.3s;
    z-index: 999;

    @media (max-width: 768px) {
        flex-direction: row;
        height: auto;
        padding: 10px;
    }
`;


const LogoLink = styled(Link)`
    color: ${props => (props.scrolled ? '#fff' : '#2C3E50')};
    text-decoration: none;
`;

const Icon = styled.img`
    height: 50px;
    width: auto;
    background-color: transparent !important;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Logo = styled.h1`
    color: ${props => (props.scrolled ? '#fff' : '#2C3E50')};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Navigation = styled.ul`
    display: flex;
    list-style: none;
    gap: 25px;
    font-size: 18px;
`;

const NavLink = styled(Link)`
    color: ${props => (props.scrolled ? '#fff' : '#2C3E50')};
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 7px;
    padding: 5px 0;
    transition: all 0.3s ease;
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 3.5px;
        background-color: ${props => (props.scrolled ? '#fff' : '#2C3E50')};
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }

    &:hover{
        transform: translateY(-5px);
    }

    &:hover::before {
        width: 100%;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Division = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const BlogRedirector = styled(Link)`
    padding: 10px 20px;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    background-color: ${props => (props.scrolled ? '#fff' : '#2C3E50')};
    color: ${props => (props.scrolled ? '#2C3E50' : '#fff')};
    border-radius: 5px;
    transition: all .5s ease;
    cursor: pointer;

    &:hover{
        transform: translateX(25px);
    }
`;

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToProfile = () => {
        scroller.scrollTo('profile', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const scrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    if (location.pathname == "/login") {
        return null;
    }

    return (
        <React.Fragment>
            <Container scrolled={scrolled}>
                <LogoLink onClick={scrollToTop}><Icon src={portfolio} /></LogoLink>
                <LogoLink onClick={() => window.location.href = "/"} ><Logo scrolled={scrolled}>Developer | Suriya</Logo></LogoLink>
                <Navigation>
                    <NavLink scrolled={scrolled} onClick={() => window.location.href = "/"}>{Home}<Division>Home</Division></NavLink>
                    <NavLink scrolled={scrolled} onClick={scrollToProfile}>{About}<Division>Profile</Division></NavLink>
                    <NavLink scrolled={scrolled} onClick={scrollToContact}>{Contact}<Division>Contact</Division></NavLink>
                </Navigation>
                <BlogRedirector scrolled={scrolled} onClick={() => window.location.href = ""}>Article</BlogRedirector>
            </Container>
        </React.Fragment>
    );
}

export default Navbar;