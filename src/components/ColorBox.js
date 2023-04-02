import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

function ColorBox({ children, color, pixels, style = {}, disableCopy=false }) {
    const [open, setOpen] = useState(false);
    const fullStyle = {
        height: `${pixels}px`,
        width: `${pixels}px`,
        backgroundColor: color,
        display: "inline-flex",
        cursor: 'pointer',
        ...style
    };
    const onClick = () => {
        if(!disableCopy) {
            navigator.clipboard.writeText(color);
            setOpen(true)
            setTimeout(() => setOpen(false), 800)
        } else {
            console.log('color', color)
        }
    }

    return (
        <Tooltip
            placement='top'
            open={open}
            disableHoverListener
            title="Copied Color To Clipboard"
        >
            <div style={fullStyle} onClick={onClick}>
                {children}
            </div>
        </Tooltip>
    );
}

export default ColorBox;