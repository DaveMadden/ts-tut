/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import './styles.css'


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void //this function does a thing but returns nothing, so 
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}) => { //instead of the <Props> could also put ": Props" after the curly braces in the param parens

    // console.log(todo)

    return (
        <form className="input"
            onSubmit={(e) => {
                handleAdd(e)
            }}
            >
            <input type="text"
                placeholder="type something"
                className="input__box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}

export default InputField