/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import './styles.css'


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => { //instead of the <Props> could also put ": Props" after the curly braces in the param parens

    console.log(todo)

    return (
        <form action="" className="input">
            <input type="input"
                placeholder="type something"
                className="input__box"
                onChange={
                    (e) => setTodo(e.target.value)
                }
            />
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}

export default InputField