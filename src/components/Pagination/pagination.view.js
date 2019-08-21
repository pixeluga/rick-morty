// Core
import styled from "styled-components";

export default {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        margin: 1rem;
  `,
    Ul: styled.ul`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding:0;
  `,
    Li: styled.li`
        padding:5px;
        margin: 3px;
        cursor: pointer;
        background-color:#fff;
        border: 1px solid #eee;
        border-radius: 3px;
        box-shadow: 1px 1px 3px #ccc;
        color: #00afc7;
        font-weight: 700;
        size: .8rem;
  `,
};
