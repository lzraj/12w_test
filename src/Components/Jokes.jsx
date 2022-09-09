import "../App.scss";
import { useEffect, useState } from "react";


export default function Jokes({jokes, type, setup, delivery, id}) {

  
  if (null === jokes) {
    return (
        <div className="loader">
            <div className="container">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
        </div>
    );
}

return (
    <ul>
          {
      type === "single" ? <div> {id} Joke: <br/><b>{jokes}</b></div> : <div style={{color:'skyblue'}}> {id} Q&A: <br/>{setup} <i>{delivery}</i></div> 
   }
    </ul>
);
}

