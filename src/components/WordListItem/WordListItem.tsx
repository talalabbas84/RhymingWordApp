import {
  ListItem,
  ListItemText
} from "@mui/material";
import React from "react";

interface IChildProps {
  word: string;
  divider: boolean;
}

const TodoListItem = React.memo<IChildProps>(
  ({ word, divider }) => (
    <ListItem divider={divider}>
      <ListItemText primary={word} />
    </ListItem>
  )
);

export default TodoListItem;
