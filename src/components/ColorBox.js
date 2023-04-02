
function ColorBox({ children, color, pixels, style={} }) {
    const fullStyle = {
        height: `${pixels}px`,
        width: `${pixels}px`,
        backgroundColor: color,
        display: "inline-flex",
        ...style
    };

    return (
        <div style={fullStyle}>
            {children}
        </div>
    );
}

export default ColorBox;