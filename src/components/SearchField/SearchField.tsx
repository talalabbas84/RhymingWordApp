import { Button, Grid, Paper, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";


interface IChildProps {
  inputValue: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
}

const useStyles = makeStyles(() => ({
  root: {
    margin: 16,
    padding: 16,
  },
  textFieldDiv: {
    paddingRight: 16,
  }
}));


const SearchField = React.memo<IChildProps>(
  ({ inputValue, onInputChange, onButtonClick }) => {
    const classes = useStyles();
    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid xs={10} md={11} item className={classes.textFieldDiv}>
            <TextField
              placeholder="Find rhyming words"
              value={inputValue}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              onClick={onButtonClick}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
);

export default SearchField;
