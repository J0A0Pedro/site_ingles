import React from "react";
import "./Body.css";
import Logo from "../../img/pexels-photo-968299.png";

export default function Body() {
  return (
    <section className='section_cont'>

      <div className='intro'>
        <h1><span>Wise Up Online.</span><br /> Aprenda Inglês 100% Real, 100% Digital.</h1>
        <p className='intro-p'>Com o Wise Up Online você se torna realizador.
          Estude inglês no seu ritmo e de onde estiver.</p>
        <button><a href="#">Comece agora</a></button>
      </div>



      <div className="logo">
        <div className="">
          <img src={Logo} alt="img" width="250px" />
        </div>
      </div>

    </section>
  )
}