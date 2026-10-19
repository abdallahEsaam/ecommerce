
import { useState } from "react";

export default function Newx() {
    const [active, setActive] = useState(true);

    const [username, setUsername] = useState({
        username: "ali",
        age: 30
    });

    function handleChange() {
        setUsername({
            ...username,
            username: "khaled",
            age: 25
        });
    }

    return (
        <>
            <h1>Name: {username.username}</h1>
            <p>Age: {username.age}</p>

            {active
                ? <h1>Hello, React!</h1>
                : <h1>Goodbye, React!</h1>
            }

            <button
                className="btn btn-primary"
                onClick={() => setActive(!active)}
            >
                Click Me
            </button>

            <button
                className="btn btn-primary"
                onClick={handleChange}
            >
                Username
            </button>
        </>
    );
}
