import styled from "styled-components";
import { ImProfile } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const PhoneIcon = styled(FaPhoneAlt)`
    height: 20px;
    wdith: auto;
`;

const MailIcon = styled(MdAlternateEmail)`
    height: 20px;
    wdith: auto;
`;

const ProfileIcon = styled(ImProfile)``;

const ProfileContainer = styled.section`
    height: auto;
    width: 100%;
    overflow-X: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 100px;
`;

const Header = styled.header`
    font-size: 42px;
    font-weight: bold;
    font-style: normal;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all .4s ease;

    &:hover{
        transform: scale(1.05);
    }
`;

const Container = styled.div`
    height: auto;
    width: 95%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const ContentHeader = styled.h1`
    font-size: 32px;
    font-style: normal;
    margin: 0;
    padding: 25px 0px;
`;

const ContentParagrabh = styled.p`
    width: 70%;
    text-align: justify;
    letter-spacing: 1px;
    position: relative;
    top: -25px;
`;

const Divider = styled.span`
    text-decoration: underline;
`;

const ContactContainer = styled.div``;

export default function ProfileInro() {
    return (
        <ProfileContainer>
            <Header>Profile<ProfileIcon /></Header>
            <Container>
                <ContentHeader>About!</ContentHeader>
                <ContentParagrabh>I am a dedicated <Divider>React Developer</Divider>, currently advancing my skills in <Divider>Full Stack Development</Divider>. My qualifications include certifications in the fundamentals of Python and Java programming, in addition to an in-depth Master Class training in HTML, CSS, and JavaScript programs. I have also successfully completed rigorous courses in Node.js and MongoDB, facilitated by Infosys Springboard and FreeCodeCamp platforms. My accomplishments extend to obtaining a Responsive Web Design Certificate. I have hands-on experience with the <Divider>MERN technology</Divider> stack (MongoDB, Express.js, React, and Node.js).</ContentParagrabh>
                <ContentParagrabh style={{ top: "-25px"}}>I bring with me valuable web hosting expertise, acquired through hands-on experience. Furthermore, I take pride in my proficient typing skills, backed by both Intermediate and Advanced level certificates.</ContentParagrabh>
                <ContentParagrabh style={{ top: "-25px"}}>Additionally, I have 3 months of experience at <Divider>Agam Technology Services</Divider>, where I worked on an incomplete project, further honing my skills and understanding of real-world project dynamics.</ContentParagrabh>
            </Container>
            <ContactContainer>
                <ContentHeader style={{ textAlign: "center"}}>Contact</ContentHeader>
                <ContentParagrabh style={{ display: "flex", flexDirection : "row", justifyContent: "center", alignItems: "start", gap: "10px", width: "100%"}}>Phone : +91 8838060247<PhoneIcon /></ContentParagrabh>
                <ContentParagrabh style={{ display: "flex", flexDirection : "row", justifyContent: "center", alignItems: "start", gap: "10px", width: "100%"}}>Email : <Divider style={{ cursor: "pointer"}} onClick={ () => window.location.href = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=admin@developersuriya.xyz"}>admin@developersuriya.xyz</Divider><MailIcon /></ContentParagrabh>
            </ContactContainer>
        </ProfileContainer>
    );
}