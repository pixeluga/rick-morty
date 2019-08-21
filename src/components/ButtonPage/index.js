// Core
import React from 'react';

// Styled
import Button from "./button.view.js";

const ButtonPage = (props) => {

    const _changePage = () => {
        props.click();
    };

    return (
        <Button
            disabled = { props.disabled }
            onClick = { _changePage }>
            {props.text}
        </Button>
    );
};

export default ButtonPage;
