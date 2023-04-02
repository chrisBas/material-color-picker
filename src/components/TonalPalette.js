import ColorBox from "./ColorBox";

function TonalPalette({ hexColorsByTone, pixels }) {
    const style = {
        border: '1px solid black',
        display: 'inline-flex'
    };

    return (
        <div style={style}>
            {
                Object.entries(hexColorsByTone).map(([tone, hexColor]) => (
                    <ColorBox key={tone} color={hexColor} pixels={pixels}>
                        <span style={{ color: tone > 50 ? 'black' : 'white' }}>{tone}</span>
                    </ColorBox>
                ))
            }
        </div>
    );
}

export default TonalPalette;