// Core
import React from 'react';
import logo from '../../logo.png';

export default function Header () {
    return (
        <header>
            <a href = '/rick-morty' title = 'To main page'>
                <img alt = 'logo' height = '100px' src = { logo } />
            </a>
        </header>
    );
}
