import ColorBox from "./ColorBox";


function ColorCircle({ children, color, pixels, style={} }) {
    const fullStyle = {
        border: `1px solid ${color}`,
        borderRadius: `${pixels}px`,
        ...style
    }

    return (
        <ColorBox color={color} pixels={pixels} style={fullStyle}>
            {children}
        </ColorBox>
    );
}

export default ColorCircle;