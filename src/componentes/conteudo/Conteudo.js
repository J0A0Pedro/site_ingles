import React from "react";
import "./Conteudo.css";

import { MdPhonelink, MdMovieCreation, MdOndemandVideo, MdOutlineCheckCircle, MdOutlineDone, MdOutlineHistory } from "react-icons/md";

export default function Conteudo() {
  return (
    <section className='conteudo_cont'>

      <div className='conteudo_intro'>
        <h1>Só quem é aluno <span>Wise Up Online</span> <br />
          estuda assim:</h1>
        <p>O Wise Up Online é um curso de inglês 100% digital com um método inovador e
          diferente de escolas de ensino.<br /> Estude onde quiser com conteúdos exclusivos.</p>

        <div className="box">
          <div className="box-cont">
            <MdPhonelink size={50} />
            {/* <img src="#" alt="img" /> */}
            <h4>Multiplataforma</h4>
            <p>Acesse a plataforma em qualquer dispositivo</p>
          </div>

          <div className="box-cont">
            <MdMovieCreation size={50} />
            {/* <img src="#" alt="img" /> */}
            <h4>Multiplataforma</h4>
            <p>Acesse a plataforma em qualquer dispositivo</p>
          </div>

          <div className="box-cont">
            <MdOndemandVideo size={50} />
            {/* <img src="#" alt="img" /> */}
            <h4>Multiplataforma</h4>
            <p>Acesse a plataforma em qualquer dispositivo</p>
          </div>

          <div className="box-cont">
            <MdOutlineHistory size={50} />
            {/* <MdOutlineDone size={50} /> */}
            {/* <MdOutlineCheckCircle size={50} /> */}
            {/* <img src="#" alt="img" /> */}
            <h4>Multiplataforma</h4>
            <p>Acesse a plataforma em qualquer dispositivo</p>
          </div>


        </div>
      </div>
    </section>
  )
}