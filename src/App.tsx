import React from 'react';
import { useState } from 'react';
import ItemForm from './ItemForm';
import ItemTable from './ItemTable';

export type Item = {
  id: number;
  title: string;
  description: string;
}


function App() {

  let storeditems: Item[] = JSON.parse(String(localStorage.getItem("todoList")));
  const initialItems : Item[] = storeditems || [];
  const initialItem : Item = {id: -1, title : "", description : ""}
  let [items, setItems] = useState(initialItems);
  let [item, setItem] = useState(initialItem);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [id, setId] = useState(-1);

  return (
    <div className="App">
      <ItemForm item={item} setItem={setItem} items={items} setItems={setItems} title={title} setTitle={setTitle} description={description} setDescription={setDescription} id={id} setId={setId} />
      <ItemTable items={items} setItems={setItems} item={item} setItem={setItem} title={title} setTitle={setTitle} description={description} setDescription={setDescription} id={id} setId={setId} />
    </div>
  )
}

export default App;
