import js from "../../assets/js.svg";

function Card({ card, onClick }) {
  return (
    <div
      className={`memory-card${card.isFlipped ? " flip" : ""}`}
      onClick={onClick}
      style={{ order: card.order }}
      data-testid={card.id}
    >
        {console.log(card)}
      <img className="front-face" style={{width:'40px', height:'40px'}} src={'https://www.patterns.dev/img/reactjs/react-logo@3x.svg'} alt="Card" />
      <img className="back-face"  style={{width:'40px', height:'40px'}} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png?20170919082558'} alt="JS Badge" />
    </div>
  );
}

export default Card;
