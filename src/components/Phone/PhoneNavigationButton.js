import { Box, Typography } from "@mui/material";


function PhoneNavigationButton({ surfaceContainerHigh, label, children, ratio = 1 }) {
    return (
        <Box>
            <Box height={`${32 * ratio}px`} width={`${64 * ratio}px`} borderRadius={`${16 * ratio}px`} marginBottom={`${4 * ratio}px`} backgroundColor={surfaceContainerHigh} justifyContent="center" display="flex" alignItems="center">
                <Box height={`${24 * ratio}px`} width={`${24 * ratio}px`}>
                    {children}
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography>{label}</Typography>
            </Box>
        </Box>
    );
}

export default PhoneNavigationButton;