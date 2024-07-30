import styled from "styled-components";
import { animationScroll as scroll, scroller } from "react-scroll";
import { MdFindInPage } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import Image from "../../image/logo.png";

const PageIcon = styled(MdFindInPage)``;
const Link = styled(FaLink)``;

const FooterContainer = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2C3E50 !important;
    padding: 50px;
`;

const Container = styled.div`
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
`;

const ImageContainer = styled.img`
    height: 150px;
    width: auto;
`;

const Divisor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

const DivisorHeader = styled.header`
    font-size: 22px;
    font-weight: bold;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const ULdivisor = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
`;

const List = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    color: #fff;
    transition: all .3s;
    cursor: pointer;
    padding: 5px 0;

    &:hover{
        color: #FFC107;
        text-decoration: underline;
    }
`;

const CopyRight = styled.div`
    color: #fff;
`;

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const scrollToProfile = () => {
        scroller.scrollTo('profile', { duration: 800, delay: 0, smoth: 'easeInOutQuart'});
    };

    const scrollToContact = () => {
        scroller.scrollTo('contact', { duration: 800, delay: 0, smoth: 'easeInOutQuart'});
    };
    return (
        <FooterContainer>
            <Container>
                <ImageContainer src={Image} />
                <Divisor>
                    <DivisorHeader>Page's<PageIcon /></DivisorHeader>
                    <ULdivisor>
                        <List onClick={scrollToTop}>Home</List>
                        <List onClick={scrollToProfile}>Profile</List>
                        <List onClick={scrollToContact}>Contact</List>
                        <List>Article</List>
                    </ULdivisor>
                </Divisor>
                <Divisor>
                    <DivisorHeader>Link</DivisorHeader>
                    <ULdivisor>
                        <List>Privacy Policy<Link /></List>
                        <List>Term's & Condition<Link /></List>
                        <List>Disclaimer<Link /></List>
                    </ULdivisor>
                </Divisor>
            </Container>
            <CopyRight>&#169; 2024 developersuriya.xyz , All rights reserved.</CopyRight>
        </FooterContainer>
    );
}