import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
import Widgets from "@mui/icons-material/Widgets";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function TaskComponent({ task, secondary, onSecondary, ratio = 1, error, onError, isDone = false }) {
    // box shadow reference:
    // https://stackoverflow.com/questions/30533055/calculating-shadow-values-for-all-material-design-elevations
    const boxShadowDp2 = "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)";

    return (
        <Grid container my={2} columnSpacing={2} alignItems="center">
            <Grid item xs={2}>
                <Box style={{ height: '28px', width: '28px', display: 'flex', borderRadius: '4px', backgroundColor: secondary, color: onSecondary, justifyContent: 'center', alignItems: 'center' }}>
                    <Widgets />
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box display="flex">
                    <Typography>{task}</Typography>
                </Box>
                <Typography variant="caption" style={{ backgroundColor: secondary, color: onSecondary, padding: '2px 4px' }}>Habit</Typography>
            </Grid>
            <Grid item xs={2}>
                <Box
                    height={`${36 * ratio}px`}
                    width={`${36 * ratio}px`}
                    borderRadius={`${36 * ratio}px`}
                    backgroundColor={isDone ? "#205107" : error}
                    color={isDone ? "#B8F397" : onError}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    boxShadow={boxShadowDp2}
                >
                    {isDone
                        ?
                        <Check style={{ display: 'flex' }} />
                        :
                        <Close style={{ display: 'flex' }} />
                    }
                </Box>
            </Grid>
        </Grid>
    );
}

export default TaskComponent;