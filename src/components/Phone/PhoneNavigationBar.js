import Home from "@mui/icons-material/Home";
import Notifications from "@mui/icons-material/Notifications";
import Person from "@mui/icons-material/Person";
import Task from "@mui/icons-material/Task";
import { Box } from "@mui/material";
import PhoneNavigationButton from "./PhoneNavigationButton";


function PhoneNavigationBar({ surfaceContainer, onSurfaceContainer, surfaceContainerHigh, ratio = 1, style = {} }) {
    return (
        <Box width="100%" display="flex" backgroundColor={surfaceContainer} color={onSurfaceContainer} sx={style}>
            <Box marginBottom={`${16 * ratio}px`} marginTop={`${12 * ratio}px`} display="flex" justifyContent="space-around" width="100%">
                <PhoneNavigationButton surfaceContainerHigh={surfaceContainerHigh} label="Home" ratio={ratio}>
                    <Home style={{ display: 'flex' }} />
                </PhoneNavigationButton>
                <PhoneNavigationButton label="Tasks" ratio={ratio}>
                    <Task style={{ display: 'flex' }} />
                </PhoneNavigationButton>
                <PhoneNavigationButton label="Alerts" ratio={ratio}>
                    <Notifications style={{ display: 'flex' }} />
                </PhoneNavigationButton>
                <PhoneNavigationButton label="Profile" ratio={ratio}>
                    <Person style={{ display: 'flex' }} />
                </PhoneNavigationButton>
            </Box>
        </Box>
    );
}

export default PhoneNavigationBar;