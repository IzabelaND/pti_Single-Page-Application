import React from 'react';

export function App2() {
  return (
    <div className='wrapper'>
      <Card img="https://thumbs.dreamstime.com/b/%C3%ADcone-do-vetor-hamburguer-128814613.jpg" title="Hamburguer" description="Hamburgue 1"/>
        
      
    </div>
  );
      
}

function Card (props){
  return(
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt="" class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        
        <div class="container">
          <p className="card__description">{props.description}</p>
          <button className="card__btn">Vie Recipe</button>
        </div>

      </div>
      
    </div>
  );
}

export default App2;