import { useState, useEffect, useMemo } from "react";

const num = 2;
const doubleNumber = num * 2;
const UseMemoHook = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const themeStyle = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };

    return (
        <div>
            <input type='number' value={number} onChange={e => setNumber(e.target.value)} />
            <br />
            <br />

            <button onClick={() => setDark(!dark)} >Change Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </div>
    )
}
export default UseMemoHook;