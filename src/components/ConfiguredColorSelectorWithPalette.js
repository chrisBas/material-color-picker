import { argbFromHex, Hct, hexFromArgb } from "@material/material-color-utilities";
import { Grid, Typography } from "@mui/material";
import ColorCircle from "./ColorCircle";
import LabeledSlider from "./LabelSlider";
import TonalPalette from "./TonalPalette";

function ConfiguredColorSelectorWithPalette({ text, color, pixels, setColor, hexColorsByTone }) {
    var hct = Hct.fromInt(argbFromHex(color));
    let hueValue = hct.internalHue;
    let chromaValue = hct.internalChroma;
    let maxChroma = Hct.from(hct.internalHue, 1000, hct.internalTone).internalChroma;

    const setHueValue = (hueValue) => {
        const hexPrimary = hexFromArgb(Hct.from(hueValue, hct.internalChroma, hct.internalTone).argb)
        setColor(hexPrimary);
    }
    const setChromaValue = (chromaValue) => {
        const hexPrimary = hexFromArgb(Hct.from(hct.internalHue, chromaValue, hct.internalTone).argb)
        setColor(hexPrimary);
    }

    return (
        <Grid container>
            <Grid item md={1}>
                <Typography variant="subtitle1" fontWeight={"bold"}>{text}</Typography>
            </Grid>
            <Grid item md={3}>
                <LabeledSlider label="Hue" min={0} max={360} value={hueValue} setValue={setHueValue} />
                <LabeledSlider label="Chroma" min={0} max={maxChroma} value={chromaValue} setValue={setChromaValue} />
            </Grid>
            <Grid item md={1}>
                <ColorCircle color={color} pixels={pixels} style={{ marginRight: `${pixels}px`, }} />
            </Grid>
            <Grid item md={7}>
                <TonalPalette hexColorsByTone={hexColorsByTone} pixels={pixels} />
            </Grid>
        </Grid>
    );
}

export default ConfiguredColorSelectorWithPalette;