import React from "react"
import {ButtonWrapper, SecondaryButtonWrapper} from "./button.styles"

const Button = ({children, link, type, style}) => {
    return type === 'primary' ?
        <ButtonWrapper to={link} style={style}>
            {children}
        </ButtonWrapper>
        : <SecondaryButtonWrapper to={link} style={style}>
            {children}
        </SecondaryButtonWrapper>
}


export default Button