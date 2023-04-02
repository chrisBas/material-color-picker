import { Box } from "@mui/material";
import DateSelectorComponent from "./DateSelectorComponent";

function DateSelectorAppBar({ primary, onPrimary, primaryContainer, onPrimaryContainer, ratio = 1, style = {} }) {
    return (
        <Box
            display="inline-flex"
            alignItems="center"
            position="relative"
            left={`${-28 * ratio}px`}
            sx={style}
        >
            {[5, 6, 7, 8, 9, 10, 11].map(day => (
                <DateSelectorComponent
                    key={day}
                    primary={primary}
                    onPrimary={onPrimary}
                    primaryContainer={primaryContainer}
                    onPrimaryContainer={onPrimaryContainer}
                    ratio={ratio}
                    month="Jan"
                    day={day}
                    active={day === 8} // set middle active for demo purposes
                />
            ))}

        </Box>
    );
}

export default DateSelectorAppBar;