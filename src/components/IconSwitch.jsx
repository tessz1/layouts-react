import React, { useState } from "react";

function IconSwitch(props) {
    const { icon, onSwitch } = props;
    const [currentIcon, setCurrentIcon] = useState(icon);

    const handleIconClick = () => {
        const newIcon = currentIcon === "view_list" ? "view_module" : "view_list";
        setCurrentIcon(newIcon);
        onSwitch(newIcon);
    }

    return (
        <div onClick={handleIconClick}>
            <i className="material-icons md-36 md-dark md-inactive">{currentIcon}</i>
        </div>
    );
}

export default IconSwitch;
