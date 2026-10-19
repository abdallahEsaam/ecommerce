// import { button } from "bootstrap"

export default function Header() {
function sayhello( user ) { 
    console.log("Hello, " + user);

}

const active = true

function toggle() {
    if(active) {
        return <h1>Hello, React!</h1>

}else {
    return <h1>Goodbye, React!</h1>
}
}

return (
    <header>
        <h1>Header</h1>
        {
        <button className='btn btn-primary' onClick={()=> sayhello("Alice")}>Click Me</button>
}
    </header>
    
    
    
)
}
