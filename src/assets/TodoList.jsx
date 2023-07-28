import { useState } from "react"

function TodoList({names}){
    const lista = names.map((name, index) => <li key={name + index}>{name}</li>)
    const [user,setUser] = useState("")
    const [items,setItems] = useState(lista)
    const users = ((e)=>{
        const value =e.target.value
        setUser(value)
    })
    const itemsChange = ((e)=>{
        e.preventDefault()
        setItems([items,<li key={name}>{user}</li>])
        setUser("")
    })
    const buttonReset = ()=>{
        setItems("")
    }
    return(
        <form>
            <ul>HERE WE HAVE A LIST: {items}</ul>
            <input type="text" name="User" value={user} onChange={users}/>
            <button onClick={itemsChange} type="submit">Push</button>
            <button type="reset" onClick={buttonReset}>Reset</button>
        </form>
    )
}
export default TodoList