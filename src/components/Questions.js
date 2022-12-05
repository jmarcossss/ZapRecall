import styled from "styled-components"
import AllCards from "./AllCards"
import logo from "../assets/img/logo.png"
import QuestionsArray from "./QuestionsArray"

export default function Questions() {

    function imprimirCards() {
        const cardsEscolhidos = [];
        const indicesEscolhidos = [];
        let indice;

        while (cardsEscolhidos.length < 4) {
            indice = Math.floor(Math.random() * QuestionsArray.length);
            if(!indicesEscolhidos.includes(indice)){
                indicesEscolhidos.push(indice);
                cardsEscolhidos.push(QuestionsArray[indice]);
            }
        }

        return (
            <ul>
                {cardsEscolhidos.map((c, i) => 
                <AllCards 
                key={i} 
                pergunta={c.Q} 
                indice={i} 
                resposta={c.R}
                />)}
            </ul>
        )
    }

    return (
        <ContainerLista>
            <div className="titulo">
                <img src={logo} alt="logo ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            {imprimirCards()}
        </ContainerLista>
    )
}

const ContainerLista = styled.div`
    height: 564px;
    width: 300px;
    margin: 0 auto;
    margin-top: 30px;

    .titulo{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    h1{
        font-family: 'Righteous';
        font-size: 36px;
        color: #FFFFFF;
    }

    img{
        width: 52px;
        height: 60px;
    }
`