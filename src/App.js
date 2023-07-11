import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>🚩Far Away🌴</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") {
      return;
    }
    setQuantity(1);
    setDescription("");
  }
  const newItems = [
    { des: description, qua: quantity, packed: false, id: Date.now() },
  ];
  console.log(newItems);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for the TRIP🤔</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="Items.."
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
      <PackingList newItems={newItems} />
    </form>
  );
}
function PackingList({ newItems }) {
  return (
    <div className="list">
      <ul>
        {newItems.map((item) => (
          <Item item={item.des} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
        {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <div className="stats">
      <p>start adding items to your packing list</p>
    </div>
  );
}
