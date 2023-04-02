import ColorBox from "./ColorBox";


function ColorCircle({ children, color, pixels, style={}, disableCopy=false }) {
    const fullStyle = {
        border: `1px solid ${color}`,
        borderRadius: `${pixels}px`,
        ...style
    }

    return (
        <ColorBox color={color} pixels={pixels} style={fullStyle} disableCopy={disableCopy}>
            {children}
        </ColorBox>
    );
}

export default ColorCircle;