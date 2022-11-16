import React from 'react';

export function App() {
  return (
    <div className='wrapper'>
      <Card img="https://c8.alamy.com/comp/MC1EPG/braised-cabbage-with-spices-in-a-tomato-sauce-in-a-white-bowl-close-up-MC1EPG.jpg" title="Stewed cabbage with sauce" price="$5.90" />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuOE2K-egOxkVTMyINtQl2i1iBDi-I5PiSsCgyL6paFDxe3duK3OPNllCTGajxs1OFWY&usqp=CAU" title="Puree soup with tukey pieces" price="$7.55"/>  
      <Card img="https://i.ytimg.com/vi/cBPADIo3nMM/maxresdefault.jpg" title="Chicken with vegetables" price="$3.39"/>
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
            <p className="card__price">{props.price}</p>
            <button className="card__btn">+</button>
        </div>

      </div>  
    </div>
  );
}



export default App;
