import { Box, Typography } from "@mui/material";

function DateSelectorComponent({ ratio, primary, onPrimary, primaryContainer, onPrimaryContainer, month, day, active = false }) {
    // box shadow reference:
    // https://stackoverflow.com/questions/30533055/calculating-shadow-values-for-all-material-design-elevations
    const boxShadowDp1 = "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)";
    const boxShadowDp4 = "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)";

    return (
        <Box
            height={`${56 * ratio}px`}
            width={`${44 * ratio}px`}
            borderRadius={`${8 * ratio}px`}
            overflow="hidden"
            mx={`${8 * ratio}px`}
            display="inline-block"
            boxShadow={active ? boxShadowDp4 : boxShadowDp1}
        >
            <Box backgroundColor={primary} color={onPrimary} height="60%" display="flex" justifyContent="center" alignItems="center">
                <Typography variant="caption">{month}</Typography>
            </Box>
            <Box backgroundColor={primaryContainer} color={onPrimaryContainer} height="37%" display="flex" justifyContent="center" alignItems="center">
                <Typography variant="caption">{day}</Typography>
            </Box>
            <Box backgroundColor={primaryContainer} color={onPrimaryContainer} height="3%">
                {active &&
                    <Box height="100%" width="30%" backgroundColor="#FFFFFF" margin="auto" />
                }
            </Box>
        </Box>
    );
}

export default DateSelectorComponent;