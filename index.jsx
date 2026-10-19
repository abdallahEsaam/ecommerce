import { createRoot } from 'react-dom/client';
import Header from "./com/Header.jsx"
// import Card from "./com/Card.jsx"``
import 'bootstrap/dist/css/bootstrap.min.css';
import users from "./usre.js";
// import New from "./com/New.jsx";
import Newx from "./com/Newx.jsx";


const root = createRoot(document.querySelector('.root'));
// root.render(<h1>Hello, React!</h1>);
root.render(
    <>

    <Newx />
    {/* <Header /> */}
    {/* <div className="container">
        <div className="row">
            {users.map(userx => {
                return (
                <Card key={userx.id} pro={userx} />
                
                )
            })}
        </div>
    </div> */}

    </> 
);

