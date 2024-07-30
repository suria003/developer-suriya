import ProductStyle from "styled-components";
import { LiaBlogSolid } from "react-icons/lia";

const BlogsIcon = ProductStyle(LiaBlogSolid)`
    height: 35px;
    width: auto;
`;

const Container = ProductStyle.div`
    height: auto;
    width: auto;
    background-color: #2C3E50;
    color: #FFFFFF;
    padding: 10px;
    position: fixed;
    bottom: 1%;
    left: 1%;
    border-radius: 3px;
    cursor: pointer;

    &:hover{
        color: #2C3E50;
        background: #FFFFFF;
        box-shadow: 0px 0px 5px #2C3E50;
    }
`;

export default function Product(){
    return(
        <Container onClick={ () => window.location.href = "/blogs"}>
            <BlogsIcon />
        </Container>
    );
}