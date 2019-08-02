import React from 'react';
//import classes from '../css/ContentSearch.module.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

const contentSearch = (props) => {
    return(
        <div>
            <form>
                <TextField
                    id="outlined-dense"
                    label="Search"
                    className={useStyles.textField}
                    //value={values.name}
                    //onChange={handleChange('name')}
                    margin="dense"
                    variant="outlined"
                />
            </form>
        </div>
    );
}

export default contentSearch;