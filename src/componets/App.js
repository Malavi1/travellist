import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packinglist";
import Stats from "./stats";

function App() {
  const [items, setItems] = useState([]);
  function hangleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }
  function handleToogleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const conform = window.alert("are you really want to delete all the items");
    if (conform) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={hangleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToogleItem={handleToogleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
