import { Grid, Slider, Typography } from "@mui/material";


function LabeledSlider({ label, min, max, value, setValue }) {
    return (
        <Grid container>
            <Grid item md={4}>
                <Typography>{label}</Typography>
            </Grid>
            <Grid item md={6}>
                <Slider
                    min={min}
                    max={max}
                    value={value}
                    onChange={(_, newValue) => setValue(newValue)}
                />
            </Grid>
        </Grid>
    );
}

export default LabeledSlider;