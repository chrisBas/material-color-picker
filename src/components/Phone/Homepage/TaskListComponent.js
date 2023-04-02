import { Box } from "@mui/material";
import TaskComponent from "./TaskComponent";


function TaskListComponent({ secondary, onSecondary, ratio=1, error, onError, custom, onCustom }) {
    return (
        <Box px={2}>
            {["Wake up", "Feed dogs", "Make breakfast", "Shower", "Do dishes"].map((task, idx) => (
                <TaskComponent key={task} secondary={secondary} onSecondary={onSecondary} task={task} ratio={ratio} isDone={idx<2} error={error} onError={onError} custom={custom} onCustom={onCustom} />
            ))}
        </Box>
    );
}

export default TaskListComponent;