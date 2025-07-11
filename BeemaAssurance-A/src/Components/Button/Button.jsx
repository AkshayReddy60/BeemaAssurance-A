import React from "react";

function Button({ 
    label, 
    onClick, 
    bgColor = "bg-blue-600", 
    textColor = "text-white", 
    width = "w-auto", 
    height = "h-auto", 
    borderRadius = "rounded-md", 
    icon 
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2 px-4 ${bgColor} ${textColor} ${width} ${height} ${borderRadius}`}
        >
            {icon && <img src={icon} alt="icon" className="h-5 w-5" />}
            {label}
        </button>
    );
}

export default Button;
