// client component
// by default, all components are server components
// MUST add "use client" to make this interactive
"use client";

import { useState } from "react";

//PascalCase when naming components in the code!

// hintText is a prop (intput) to the component
export default function HintButton({hintText}) {
    //'useState' is a hook that tracks state
    //it works on the client

    //change value of state variable 'showHint' using
    //setter function 'setShowHint'
    const [showHint, setShowHint] = useState(false);

    function handleClick() {
        // log runs int the BROWSER's developer console
        console.log("Button clicked in the BROWSER!");
        setShowHint(true);

    }
    
    return (
        <div>
            <button
                /* calling the handleClick function upon button click */
                onClick={handleClick}
                /* using tailwind for styling */
                className="ml-2.5 cursor-pointer px-2.5 py-1"
                >
                    Show Hint
                </button>
                 {/* the paragraph is rendered only if showHint=true*/}
                {showHint && <p className="mt-2 text-green-600">Hint: {hintText}</p>}
        </div>
    )

}

