import React from 'react';

import cn from 'classnames';
import styles from './styles.module.css';


const getButtonClassName = (size, color) => cn(
    styles.button, 
    {
        [styles.buttonSizeSmall]: size === 'small',
        [styles.buttonSizeMedium]: size === 'medium',
        [styles.buttonSizeLarge]: size === 'large',
        [styles.buttonThemePrimary]: color === 'primary',
        [styles.buttonThemeDefault]: color === 'default',
    }
);

const BaseButton = ({
    size = "small",
    color = "default",
    angle = 0,
    onClick,
    onMouseOn,
    children,
}) => {
    return (
        <button style={{transform: `rotate(${angle}deg)`}} onMouseUp={onMouseOn} onClick={onClick} className={getButtonClassName(size, color)}>
            {children}
        </button>
    );
};


export default BaseButton;
