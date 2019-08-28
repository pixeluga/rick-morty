// Core
import styled from "styled-components";

export default {
    Wrapper: styled.div`
        ${(props) => props.dis ? `
            position: fixed;
            top: 1.5rem;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            
            width: 500px;
            height: 750px
            max-width: 70%;
            max-height: 90%;
            overflow: scroll;
            opacity: 1;

            background-color:#eee;
            border: 1px solid #fefefe;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 2px 2px 5px #ccc;
            font-size: 2rem;
           
            transform: scale(1);
            transition: top 500ms, opacity 700ms, transform 700ms, left 700ms;
        };
        `: `
            top: 0;
            bottom: 0;
            left: 1233.5px;
            right: 0;
            opacity: 0;
            overflow: hidden;
            width: 0;
            height:0;
            padding: 0;

            transform: scale(.001);
            transition: opacity 1000ms;
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
    X: styled.span`
        display: flex;
        justify-content: space-around;
        font-size: .5em;
        width: 1.1em;
        height: 1.1em;
        padding:.2em .3em .4em .3em;        
        margin-left:90%;
        margin-bottom: .5em;
        color:#555;
        border-radius: 50%;
        border: 1px solid #555;
`,
};
