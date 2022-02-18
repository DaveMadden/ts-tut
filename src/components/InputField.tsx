/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'
import './styles.css'


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void //this function does a thing but returns nothing, so 
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}) => { //instead of the <Props> could also put ": Props" after the curly braces in the param parens

    const inputRef = useRef<HTMLInputElement>(null) //this has something to do with re moving focus from the input on submit?


    return (
        <form className="input"
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}
            >
            <input type="text"
                ref={inputRef}
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