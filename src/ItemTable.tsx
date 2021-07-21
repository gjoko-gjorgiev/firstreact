import React from 'react';
import { Item } from './App';
import ItemRow from './ItemRow';

type ItemTableProps = {
    items : Item[];
    setItems : (items: Item[]) => void;
    item: Item
    setItem: (item: Item) => void
    title: string
    setTitle: (title: string) => void
    description: string
    setDescription: (title: string) => void
    id: number
    setId: (id: number) => void
}


function ItemTable(props : ItemTableProps) {

    const handleSortClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newItems = [...props.items].sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          });
        props.setItems(newItems);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th><button onClick={handleSortClick}>sort</button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map(
                            (item : Item) => {
                            return ( 
                                        <ItemRow key={item.id} item={item} setItem={props.setItem} items={props.items} setItems={props.setItems} title={props.title} setTitle={props.setTitle} description={props.description} setDescription={props.setDescription} id={props.id} setId={props.setId}/>
                                    
                            )
                            }
                        )
                    }
                </tbody>
                
            </table>
            <label>Total {props.items.length}</label>
        </div>
    )
}

export default ItemTable;