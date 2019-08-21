// Core
import styled from "styled-components";

const Button = styled.button`
        text-align: center;
        margin: .5rem;
        padding: 1rem 1.5rem;
        color: white;
        background: #83cc82;
        border: 1px solid #ededed;
        border-radius: 3px;
        cursor: pointer;
        &:hover{
          background: #00b0c7;
        };
        ${(props) => props.disabled ? `
        opacity: 0.5;
        cursor: default;
        background: #ddd;
        &:hover{
          background: #ddd;
        };
        `: ""}
    `;

export default Button;
