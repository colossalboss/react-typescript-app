import React, { FC, useState } from 'react'
import { IState as Props} from "../App"

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList:FC<IProps> = ({ people, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
    }

    const handleClick = () => {
        if (
            !input.name ||
            !input.age ||
            !input.url
        ) return;

        setPeople([
            ...people,
            {
                name: input.name,
                age: +input.age,
                url: input.url,
                note: input.note
            }
        ])

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input type="text" className="AddToList-input" placeholder="Name" value={ input.name} name="name" onChange={ handleChange } />
            <input type="text" className="AddToList-input" placeholder="Age" value={ input.age} name="age" onChange={ handleChange } />
            <input type="text" className="AddToList-input" placeholder="Image Url" value={ input.url} name="url" onChange={ handleChange } />
            <textarea name="note" id="" cols={30} rows={10} placeholder="Note" value={ input.note } onChange={ handleChange } ></textarea>
            <button className="AddToList-btn" type="button" onClick={ handleClick }>Add to list</button>
        </div>
    )
}

export default AddToList;
