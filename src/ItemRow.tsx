import React from 'react';
import { Item } from './App';

type ItemRowProps = {
    items : Item[];
    setItems : (items: Item[]) => void;
    item : Item;
    setItem : (items: Item) => void;
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    id: number;
    setId: (id: number) => void;
}

function ItemRow(props : ItemRowProps) {

    const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.tagName)
        props.setId(props.item.id)
        props.setTitle(props.item.title)
        props.setDescription(props.item.description)
    }
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newItems: Item[] = props.items.filter((element) => element.id !== props.item.id)
        props.setItems(newItems);
        props.setTitle("");
        props.setDescription("");
        props.setId(-1);
        e.stopPropagation();

        localStorage.setItem("todoList", JSON.stringify(newItems));
    }

    return (
        <tr key={props.item.id}  onClick={handleRowClick}>
                                            <td>{props.item.title}</td>
                                            <td><button onClick={handleButtonClick}>x</button></td>
                                        </tr>
    )
}

export default ItemRow;