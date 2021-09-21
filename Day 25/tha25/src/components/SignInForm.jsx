  
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { emailChanged, nameChanged } from '../actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  heading:{
    color: '#1977d9',
  },

  form: {
    marginTop: theme.spacing(1),
    flexWrap: 'wrap',
    display: 'flex',
    alignItems: 'center',

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInForm() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5" fontWeight="fontWeightBold">
          <h1 className={classes.heading} >Sign in</h1>
        </Typography>
        <form className={classes.form} noValidate>
            <div>
              
                <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Name"
            label="Name"
            type="text"
            id="name"
            autoComplete="name"
            autoFocus
            onChange={(event) => { dispatch(nameChanged(event.target.value)) }}
          />
                
                <TextField
            // variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(event) => { dispatch(emailChanged(event.target.value)) }}
          />
                
            </div>
          
          
        </form>
      </div>

    </Container>
  );
}