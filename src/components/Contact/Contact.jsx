import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const ContactContainer = styled.section`
    height: auto;
    width: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 100px;
`;

const Container = styled.div`
    height: auto;
    width: 80%;
    display: grid;
    place-items: center;
`;

const FormContainer = styled.form`
    height: auto;
    width: 42.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Divisor = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Input = styled.input`
    font-size: 16px;
    padding: 10px 20px;
    border: 1px solid #2C3E50;
    outline: none;
    border-radius: 5px;
    width: 92.5%;
`;

const TextArea = styled.textarea`
    font-size: 16px;
    padding: 10px 20px;
    width: 92.5%;
    height: auto;
    position: relative;
    border-bottom: 1px solid #2C3E50;
    outline: none;
    border-radius: 5px;
`;

const Submit = styled.button`
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    height: auto;
    font-weight: bold;
    font-styled: normal;
    background: #2C3E50;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        border: 1px solid #2C3E50;
        background-color: #fff;
        color: #2C3E50;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Message = styled.div`
    font-size: 20px;
    color: #fff;
    padding: 10px;
    margin-top: 20px;
    animation: ${fadeIn} 1s ease-in-out;
    position: fixed;
    top: 10%;
    right: 3%;
    background: green;

`;

export default function Contact() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        number: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setFormData({
                ...formData,
                [e.target.name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://formspree.io/f/xjkbyglk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                setSubmitted(true);
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            } else {
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    };

    return (
        <ContactContainer>
            <Container>
                <FormContainer onSubmit={handleSubmit}>
                    <Divisor>
                        <Input id="firstname" name="firstname" type="text" value={formData.firstname} onChange={handleChange} placeholder="First Name" required />
                        <Input id="lastname" name="lastname" type="text" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required />
                    </Divisor>
                    <Input id="number" name="number" type="text" value={formData.number} onChange={handleNumberChange} placeholder="Number" required />
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                    <TextArea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message!"></TextArea>
                    <Submit type="submit">Get in Touch</Submit>
                </FormContainer>
                {submitted && <Message>Your message has been sent successfully!<br/>We will contact you soon.</Message>}
            </Container>
        </ContactContainer>
    );
}