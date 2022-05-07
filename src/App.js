import { useState, useRef, useEffect } from 'react';
import Content from './Content';
import './App.scss';

function App() {
    const [show, setShow] = useState(false);

    return (
        <div className="App">
            <h1 className="btn--show">Welcom to Photo App!</h1>
            <button className="btn btn--show" onClick={() => setShow(!show)}>
                Show
            </button>
            {show && <Content />}
        </div>
    );
}

export default App;
