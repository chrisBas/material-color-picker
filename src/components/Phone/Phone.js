import { Box } from "@mui/material";
import PhoneNavigationBar from "./PhoneNavigationBar";
import PhoneFab from "./PhoneFAB";
import DateSelectorAppBar from "./Homepage/DateSelectorAppBar";
import PhoneStatusBar from "./PhoneStatusBar";
import TaskListComponent from "./Homepage/TaskListComponent";
import PhoneTopAppBar from "./PhoneTopAppBar";

function Phone({ primary, onPrimary, primaryContainer, onPrimaryContainer, secondary, onSecondary, surface, onSurface, surfaceContainer, onSurfaceContainer, surfaceContainerHigh, error, onError, custom, onCustom }) {
    const googlePixel6Ratio = 20 / 9;
    const phoneHeight = 2400;
    const phoneWidth = phoneHeight / googlePixel6Ratio;

    const ratio = 3;
    const componentRatio = 1;

    return (
        <Box
            sx={{
                height: `${phoneHeight / ratio}px`,
                width: `${phoneWidth / ratio}px`,
                backgroundColor: surface,
                borderRadius: '12px',
                color: onSurface,
                position: 'relative',
                border: '1px solid black',
                overflow: 'hidden',
            }}
        >
            <PhoneStatusBar />
            <PhoneTopAppBar ratio={componentRatio} />
            <DateSelectorAppBar
                primary={primary}
                onPrimary={onPrimary}
                primaryContainer={primaryContainer}
                onPrimaryContainer={onPrimaryContainer}
                style={{ my: `${12 * componentRatio}px` }}
            />
            <TaskListComponent secondary={secondary} onSecondary={onSecondary} error={error} onError={onError} custom={custom} onCustom={onCustom} />
            <PhoneFab primaryContainer={primaryContainer} onPrimaryContainer={onPrimaryContainer} style={{ position: 'absolute', right: 0, bottom: 88 }} />
            <PhoneNavigationBar
                surfaceContainer={surfaceContainer}
                onSurfaceContainer={onSurfaceContainer}
                surfaceContainerHigh={surfaceContainerHigh}
                style={{ position: 'absolute', bottom: 0, left: 0 }}
                ratio={componentRatio}
            />
        </Box >
    );
}

export default Phone;