import {useState} from 'react';	
export default function Player() {
  const(enteredName, setEnteredPlayerName) = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handlechange(event) {}
  setEnteredPlayerName(event.target.value);

  function handleClick() {}
  setSubmitted(true);

  return (
    <section id="player">
      <h2>Welcome{true? setEnteredPlayerName :unknown entity} unknown entity</h2>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </section>
  );
}
