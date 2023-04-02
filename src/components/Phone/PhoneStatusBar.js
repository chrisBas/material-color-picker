import BatteryFull from "@mui/icons-material/BatteryFull";
import SignalCellular2Bar from "@mui/icons-material/SignalCellular2Bar";
import SignalWifi4Bar from "@mui/icons-material/SignalWifi4Bar";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function PhoneStatusBar() {
    return (
        <Box px={2} py={1}>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography>11:40</Typography>
                </Grid>
                <Grid item>
                    <SignalWifi4Bar />
                    <SignalCellular2Bar />
                    <BatteryFull />
                </Grid>
            </Grid>
        </Box>
    );
}

export default PhoneStatusBar;