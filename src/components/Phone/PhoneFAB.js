import Add from "@mui/icons-material/Add";
import { Box } from "@mui/material";


function PhoneFab({ primaryContainer, onPrimaryContainer, ratio = 1, style = {} }) {
    // box shadow reference:
    // https://stackoverflow.com/questions/30533055/calculating-shadow-values-for-all-material-design-elevations
    const boxShadowDp6 = "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)";

    return (
        <Box
            display="flex"
            width={`${56 * ratio}px`}
            height={`${56 * ratio}px`}
            marginBottom={`${16 * ratio}px`}
            marginRight={`${16 * ratio}px`}
            borderRadius={`${16 * ratio}px`}
            backgroundColor={primaryContainer}
            color={onPrimaryContainer}
            justifyContent="center"
            alignItems="center"
            boxShadow={boxShadowDp6}
            sx={style}
        >
            <Box width={`${24 * ratio}px`} height={`${24 * ratio}px`}>
                <Add style={{ display: 'flex' }} />
            </Box>
        </Box>
    );
}

export default PhoneFab;