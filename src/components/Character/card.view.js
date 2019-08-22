// Core
import styled from "styled-components";

export default {
    Wrapper: styled.div`
        width: 200px;
        display: flex;
        flex-direction: column;
        background-color:#eee;
        border: 1px solid #fefefe;
        border-radius: 3px;
        padding: 20px;
        margin: 1rem;
        box-shadow: 2px 2px 5px #ccc;
    `,
    Title: styled.h3`
        margin-bottom: 10px;
    `,
    Info: styled.ul`
        list-style: none;
        margin: 0;
        padding:0;
    `,
    Image: styled.img`
        width: 200px;
        height: 200px;
        border-radius: 3px;
    `,
};
