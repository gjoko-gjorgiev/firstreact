import React from 'react';
import { Item } from './App';

type ItemFormProps = {
    item: Item
    setItem: (item: Item) => void
    items: Item[]
    setItems: (items: Item[]) => void
    title: string
    setTitle: (title: string) => void
    description: string
    setDescription: (description: string) => void
    id: number
    setId: (id: number) => void
}

var idSequence : number = Number(localStorage.getItem("todoSequence")) || 0;

function ItemForm(props: ItemFormProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.id === -1) {
            let newItems: Item[] =  [...props.items, 
                {
                    id: ++idSequence, 
                    title: props.title, 
                    description: props.description
                }
            ]
            props.setItems(newItems);
            localStorage.setItem("todoList", JSON.stringify(newItems));
            localStorage.setItem("todoSequence", JSON.stringify(idSequence));
        } else {
            let newItems: Item[] =  props.items.map((item) => {
                if (item.id === props.id) {
                    return {...item, title: props.title, description: props.description}
                }
                return item
            })
            props.setItems(newItems)
            localStorage.setItem("todoList", JSON.stringify(newItems));
        }

        props.setTitle("")
        props.setDescription("")
        props.setId(-1)
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setDescription(e.currentTarget.value)
    }

    const handleClearButtonClick = (e: React.MouseEvent<HTMLInputElement>) => {
        props.setTitle("")
        props.setDescription("")
        props.setId(-1)
    }

    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <label hidden={props.id === -1}>ID{props.id}</label>
                <input type="text" onChange={handleTitleChange} value={props.title} placeholder="Title"/>
                <input type="text" onChange={handleDescriptionChange} value={props.description} placeholder="Description"/>
                <input type="submit" value= "Confirm" />
                <input type="button" value="Clear" onClick={handleClearButtonClick} />
            </form>
        </div>
    )

}

export default ItemForm;