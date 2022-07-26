import React from "react";
import "./Perguntas.css";

export default function Perguntas() {
    return (

        <div className="container">
            <h1>Perguntas frequentes</h1>
            <details class="collapse">
                <summary class="title">O Wise Up Online é um complemento da escola?</summary>
                <div class="description">Não. O Wise Up Online é um curso completamente online com conteúdos e metodologia próprias para que você aprenda ou complemente o seu conhecimento na língua inglesa.
                    <br /><br />Você estuda pela plataforma no seu dispositivo favorito com aulas 100% online e documentários originais onde quiser, e quando puder. Sem horas marcadas ou deslocamento até um endereço.
                    E com a possibilidade de baixar o material didático de cada módulo do curso.</div>
            </details>

            <details class="collapse">
                <summary class="title">O conteúdo do Wise Up Online é o mesmo das escolas Wise Up?</summary>
                <div class="description">Não. Na plataforma do Wise Up Online você encontra uma metodologia única que aborda o idioma aplicado à situações reais.<br /><br />
                    No tema Travel, situações que a pessoa provavelmente irá passar em viagens ao exterior. E no tema Business, que ensina o inglês aplicado ao mundo dos negócios. Dessa forma, você desenvolve seu inglês enquanto aprende sobre a cultura norte americana e assuntos relevantes para o crescimento profissional.<br />
                    A plataforma é recomendada tanto para aprender o inglês do zero e de forma independente quanto para servir de complemento ao seu aprendizado com a Wise Up escola.</div>
            </details>

            <details class="collapse">
                <summary class="title">Pergunta 3</summary>
                <div class="description">Teste</div>
            </details>

            <details class="collapse">
                <summary class="title">Pergunta 1</summary>
                <div class="description">Teste</div>
            </details>

            <details class="collapse">
                <summary class="title">Pergunta 1</summary>
                <div class="description">Teste</div>
            </details>
        </div>
    )
}