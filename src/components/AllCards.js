import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"
import { useState } from "react"

export default function AllCards({ pergunta, resposta, indice }) {

    const [virarPergunta, setVirarPergunta] = useState(false);
    const [virarResposta, setVirarResposta] = useState(false);

    return (
        <>
            <Card desabilita={virarPergunta ? "none" : ""}>
                <p>Pergunta {indice + 1}</p>
                <img
                    className="icone-seta"
                    src={seta} alt="icone seta"
                    onClick={() => setVirarPergunta(true)}
                />
            </Card>

            {virarPergunta && (
                <CardMaior desabilita={virarResposta ? "none" : ""}>
                    <p>{pergunta}</p>
                    <img
                        onClick={() => setVirarResposta(true)}
                        className="icone-seta"
                        src={setaVirar} alt="Icone seta de virar" />
                </CardMaior>
            )}

            {virarResposta && (
                <CardMaior>
                    <p>{resposta}</p>
                </CardMaior>
            )}
        </>
    )
}

const Card = styled.li`
width: 300px;
height: 65px;
background-color: #fff;
margin-top: 20px;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Recursive';
font-size: 16px;
font-weight: 700;
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
display: ${props => props.desabilita};

.icone-seta{
    width: 20px;
    height: 23px;
}

.icone-seta:hover{
    cursor: pointer;
}
`

const CardMaior = styled(Card)`
height:131px;
background-color:#FFFFD4;
align-items: flex-start;
padding-top: 15px;
position: relative;

img{
    position:absolute;
    bottom: 20px;
    right: 20px;
}
`