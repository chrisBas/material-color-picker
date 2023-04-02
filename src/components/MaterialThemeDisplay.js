import { Grid, Typography } from "@mui/material";


function MaterialThemeDisplay({ text, hexColorsByTone, pixels, paletteValues }) {
    return <Grid container>
      <Grid item xs={3}
        sx={{
          backgroundColor: hexColorsByTone[paletteValues[0]],
          color: hexColorsByTone[paletteValues[1]],
          minHeight: '56px',
          overflow: "hidden"
        }}
      >
        <Typography variant="caption">{`${text} (${text}${paletteValues[0]})`}</Typography>
      </Grid>
      <Grid item xs={3}
        sx={{
          backgroundColor: hexColorsByTone[paletteValues[1]],
          color: hexColorsByTone[paletteValues[0]],
          minHeight: '56px',
          overflow: "hidden"
        }}
      >
        <Typography variant="caption">{`On${text} (${text}${paletteValues[1]})`}</Typography>
      </Grid>
      <Grid item xs={3}
        sx={{
          backgroundColor: hexColorsByTone[paletteValues[2]],
          color: hexColorsByTone[paletteValues[3]],
          minHeight: '56px',
          overflow: "hidden"
        }}
      >
        <Typography variant="caption">{`${text}Container (${text}${paletteValues[2]})`}</Typography>
      </Grid>
      <Grid item xs={3}
        sx={{
          backgroundColor: hexColorsByTone[paletteValues[3]],
          color: hexColorsByTone[paletteValues[2]],
          minHeight: '56px',
          overflow: "hidden"
        }}
      >
        <Typography variant="caption">{`On${text}Container (${text}${paletteValues[3]})`}</Typography>
      </Grid>
    </Grid>
  }

  export default MaterialThemeDisplay;