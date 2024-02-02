import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Page2 from "./Page2";

function UseContext() {
    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page2 />
        </ThemeContext.Provider>
    )
}

export default UseContext;