import { useState } from "react";

function Chat() {
  const [list, setList] = useState(["I'm a card", "So am I", "Try it out! Write your own card and add it :)"]);
  const [sillycard, setSillycard] = useState("");

  const onAddSillycard = () => {
    if (sillycard.length >= 1 && sillycard.length <= 64) {
      setList(list.slice(1).concat(sillycard));
      setSillycard("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onAddSillycard();
    }
  };

  const Card = ({string}) => {
    return (
      <article>{string}</article>
    );
  }

  return (
    <>
      <section>
        {list.map((input, index) => (
          <Card key={index} string={input}>{input}</Card>
        ))}
      </section>
      <input
        type="text"
        value={sillycard}
        onChange={(e) => setSillycard(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your input here!"
        onFocus={() => setSillycard("")}
      />
      <small>Maximum 64 characters</small>
      <button type="submit" onClick={onAddSillycard}>Add Card</button>
    </>
  );
}

export default Chat;
