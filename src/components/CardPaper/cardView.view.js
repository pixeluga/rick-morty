// Core
import styled from "styled-components";

export default {
    Wrapper: styled.div`
        ${(props) => props.dis ? `
            position: fixed;
            
            top: 1.5rem;
            bottom: 0;
            left: ${props.centerX}px;
            right: 0;

            overflow: scroll;
            opacity: 1;
            
            width: 500px;
            height: 750px
            max-width: 70%;
            max-height: 90%;
            padding: 30px;

            background-color:#eee;
            border: 1px solid #fefefe;
            border-radius: 15px;
            box-shadow: 2px 2px 5px #ccc;
            font-size: 2rem;

            transition: opacity 300ms,
                        height 600ms,
                        width  600ms,
                        top    600ms,
                        left   600ms;
        };
        `: `
            position: relative;

            top: ${props.topPos}px;
            bottom: 0;
            left: ${props.leftPos}px;
            right: 0;

            opacity: 0;
            overflow: hidden;

            width: 0px;
            height: 0px;
            padding: 0px;
        `}
       
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
        height: 100%;
        border-radius: 10px;
    `,
};
