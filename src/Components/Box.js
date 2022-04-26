import React from "react";

const Box = ({ color, padding = '50px', children }) => {
    return <div style={{ backgroundColor: color , padding, borderRadius: 20}}>
        {children}
    </div>
}

export default Box;