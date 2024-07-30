import styled from "styled-components";
import Banner from "../../../image/banner.jpg";
import { AiFillProject } from "react-icons/ai";
import { useEffect, useState } from "react";
import Netflix from '../../../image/netFlix-Project-removebg-preview.png';
import Weather from '../../../image/weather-project.png';
import Store from '../../../image/store-project.png';

const ProjectIcon = styled(AiFillProject)``;

const ProjectContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 150px;
    margin-bottom: 200px;
`;

const Container = styled.div`
    width: 80%;
    margin-top: 20px;
`;

const ContainerHeader = styled.h1`
    font-size: 32px;
    font-style: normal;
    margin: 0;
    padding: 25px 0;
    position: ${probs => (probs.scrolled ? 'sticky' : 'relative')};
    top: ${probs => (probs.scrolled ? '100px' : '0px')};
    z-index: 1:
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const OverLay = styled.div`
    height: 100%;
    width: 50%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 1;
    transition: all 0.5s ease-in;
`;

const Image = styled.div`
    height: 55vh;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.img`
    width: 50%;
    height: auto;
    object-fit: 100% 100%;
    transition: all 0.4s ease;
    cursor: pointer;
`;

const HeaderProject = styled.h2`
    font-size: 22px;
    font-weight: bold;
    font-style: normal;
    color: #000;
    text-decoration: underline;
    position: relative;
    left: 15%;
`;

const Description = styled.div`
    font-size: 16px;
    font-style: normal;
    width: 80%;
    text-align: justify;
    position: relative;
    left: 15%;
    color: #000;
`;

const FixedImage = styled(Image)`
    position: sticky;
    top: 200px;
`;

const OverView = styled.div`
    width: 100%;
    height: auto;
    background: #fff;
    color: #000;
`;

export default function Project() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            if (offset > 250) {
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

    return (
        <ProjectContainer>
            <Container>
                <ContainerHeader scrolled={scrolled}>
                    Project<ProjectIcon />
                </ContainerHeader>
                <FixedImage>
                    <ImageContainer src={Netflix} onClick={ ()=> window.location.href = "/profile"} />
                    <OverLay>
                        <HeaderProject>Project Name</HeaderProject>
                        <HeaderProject>Overview</HeaderProject>
                    </OverLay>
                </FixedImage>
                <FixedImage>
                    <ImageContainer src={Weather} />
                    <OverLay>
                        <HeaderProject>Project Name</HeaderProject>
                        <HeaderProject>Overview</HeaderProject>
                    </OverLay>
                </FixedImage>
                <FixedImage>
                    <ImageContainer src={Store} />
                    <OverLay>
                        <HeaderProject>Project Name</HeaderProject>
                        <HeaderProject>Overview</HeaderProject>
                    </OverLay>
                </FixedImage>
                <FixedImage>
                    <ImageContainer src={Banner} />
                    <OverLay>
                        <HeaderProject>Project Name</HeaderProject>
                        <HeaderProject>Overview</HeaderProject>
                        <Description></Description>
                    </OverLay>
                </FixedImage>
            </Container>
        </ProjectContainer>
    );
}
