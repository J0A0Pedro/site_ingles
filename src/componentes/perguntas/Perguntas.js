import React from "react";
import "./Perguntas.css";

export default function Perguntas() {
    return (

        <div className="container">
            <h1>Perguntas frequentes</h1>
            <details class="collapse">
                <summary class="title">Pergunta 1</summary>
                <div class="description">Teste</div>
            </details>

            <details class="collapse">
                <summary class="title">Pergunta 2</summary>
                <div class="description">Teste</div>
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