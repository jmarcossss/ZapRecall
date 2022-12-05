import styled from "styled-components";
import Buttons from "./Buttons";
import Questions from "./Questions";
// import { useState } from "react"

export default function ZapMain(){
    return(
        <Main>
            <Questions />
            <Buttons />
        </Main>
    )
}

const Main = styled.div
    `
    width: 375px;
    height: 667px;
    background-color: #FB6B6B;
    position: fixed;
    `