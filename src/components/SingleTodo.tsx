import React, {useState, useRef, useEffect} from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
// import { TodoList } from './TodoList'

type Props = { //doing as a type for an example, but could use interface
    todo: Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editText, setEditText] = useState<string>(todo.todo)

    const handleDone = (id:number) => {
        setTodos(
            todos.map((item) => 
                item.id === id ? {...item, isDone: !item.isDone } : item
            )
        )
    }
    const handleDel = (id: number) => {
        setTodos(todos.filter((item)=> item.id !== id))
    }
    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault();
        setTodos(
            todos.map((item)=>
                item.id === id? {...item, todo: editText} : item
            )
        );
        setEdit(!edit);
    }

    const inputRef = useRef<HTMLInputElement>(null) //tells ts which element it's referring to

    useEffect(() => { //when [edit] changes, select the content of the input ref(erenced)
        inputRef.current?.select(); //could also focus instead of select content
    }, [edit]) //run it when edit changes
    

  return (
    <form action="" className="todos__single" onSubmit={(e)=> handleEdit(e, todo.id)}>

        {
            edit ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="todos__single--text"
                    ref={inputRef}
                />
            ) : todo.isDone ?
            (<s className="todos__single--text">{todo.todo}</s>) //if it's done, strike text
            :
            (<span className="todos__single--text">{todo.todo}</span>)
            
        }

        { //formats the text based on isDone
            
        }
        <div>
            <span className="icon" onClick={()=>{
                if (!edit && !todo.isDone){
                    setEdit(!edit)
                }}
            }><AiFillEdit/></span>
            <span className="icon" onClick={()=>handleDel(todo.id)}><AiFillDelete/></span>
            <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo