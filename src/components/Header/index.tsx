import { HeaderContainer } from "./styles";

import {Timer, Scroll} from 'phosphor-react'

import logoIgnite from '../../assets/logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <img src={logoIgnite} alt="" />
            <nav>
                <a href="/"><Timer size={24}/></a>
                <a href="/history"><Scroll size={24}/></a>
            </nav>
        </HeaderContainer>
    )
}