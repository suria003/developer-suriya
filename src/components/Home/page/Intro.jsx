import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactTyped as Typed } from 'react-typed';
import Profile from "../../../image/portfolio.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Container = styled.main`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Section = styled.section`
    width: 100%;
    height: auto;
    margin: 150px 100px 0px 100px;
    text-align: center;

    position: relative;
    top: -25px;
`;

const Header = styled.h1`
    font-size: 36px;
    color: #2C3E50;
    position: relative;
    margin: 0;
    margin-top: -100px;
`;

const TypingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 10px;
    color: #2C3E50;
    margin: 20px 0;
    font-size: 46px;
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
    position: relative;
    top: 25px;
`;

const Image = styled.img``;

const GitText = styled.p`
    font-size: 16px;
    color: #fff;
    background-color: #2C3E50;
    padding: 5px 10px;
    margin: 0;
    border-radius: 5px;
    transition: all .4s ease;
    transform: translateX(-50px);
    opacity: 0;
    text-decoration: none;

    position: absolute;
    left: 40.5%;
`;

const GitHub = styled(FaGithub)`
    height: 25px;
    width: auto;
    cursor: pointer;

    &:hover ~ ${GitText} {
            transform: translateX(0px);
            opacity: 1;
    }
`;

const LinkText = styled.p`
    font-size: 16px;
    color: #fff;
    background-color: #2C3E50;
    padding: 5px 10px;
    margin: 0;
    border-radius: 5px;
    transition: all .4s ease;
    transform: translateX(50px);
    opacity: 0;
    position: absolute;
    right: 40%;
    text-decoration: none;
`;

const LinkedIn = styled(FaLinkedinIn)`
    height: 25px;
    width: auto;
    cursor: pointer;

    &:hover ~ ${LinkText} {
            transform: translateX(0px);
            opacity: 1;
        }
`;

const Button = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px; 20px;
    color: #fff;
    background-color: #2C3E50;
    font-weight: bolder;
    border-radius: 5px;
    transition: all .5s ease;

    &:hover{
        color: #2C3E50;
        background-color: #FFFFFF;
    }
`;

function Intro() {
    return (
        <React.Fragment>
            <Container>
                <Section>
                    <Image src={Profile} />
                </Section>
                <Section>
                    <Header>Welcome</Header>
                    <TypingWrapper>
                        <span>I am Suriyaprakash R, </span>
                        <Typed strings={['Full Stack Developer.']} typeSpeed={100} backSpeed={100} loop style={{ fontSize: 'inherit' }} />
                    </TypingWrapper>
                    <Button onClick={ () => window.location.href = "../../../image/Resume-suriya.pdf" }>RESUME</Button>
                    <SocialMedia>
                        <GitHub onClick={ () => window.location.href = "https://github.com/suria003"} />
                        <LinkedIn onClick={ () => window.location.href = "https://www.linkedin.com/in/suriya-prakash-r-71b559238/"} />
                        <LinkText >LinkedIn</LinkText>
                        <GitText >GitHub</GitText>
                    </SocialMedia>
                </Section>
            </Container>
        </React.Fragment>
    );
}

export default Intro;