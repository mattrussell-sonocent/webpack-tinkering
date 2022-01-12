import React, { useState } from "react";

const StatefulButton = () => {
    const [state, setState] = useState("🐧");
    return <button onClick={() => setState(s => s + "🐧")}>{state}</button>
}

export default StatefulButton
