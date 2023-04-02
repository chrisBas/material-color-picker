import ArrowBack from "@mui/icons-material/ArrowBack";
import MoreVert from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";

function PhoneTopAppBar({ ratio = 1 }) {
    return (
        <Box width="100%" display="flex" justifyContent="space-between">
            <Box marginLeft={`${16 * ratio}px`} marginRight={`${24 * ratio}px`}>
                <ArrowBack style={{ display: 'flex' }} />
            </Box>
            <Box width="100%" textAlign="center">
                <Typography>Homepage</Typography>
            </Box>
            <Box marginLeft={`${24 * ratio}px`} marginRight={`${16 * ratio}px`}>
                <MoreVert style={{ display: 'flex' }} />
            </Box>
        </Box >
    );
}

export default PhoneTopAppBar;