import React from "react";
import "./Metodologia.css";

export default function Metodologia() {
    return (
        <section>

            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cie58F82h7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>



            <div className="metodologia">


                <div>
                    <h1><span className="met">Metodologia</span></h1> <br />
                    <p>
                        O curso do Wise Up Online é completamente digital, onde você aprende o inglês aplicado na prática em situações reais de acordo com o tema do seu interesse.
                        Tudo para oferecer a você uma experiência de imersão cultural instigante, ajudando você a pensar em inglês e tornando seu aprendizado muito mais fácil.
                    </p>

                    <button><a href="#">Saiba mais</a></button>
                </div>
            </div>

        </section>
    )
}