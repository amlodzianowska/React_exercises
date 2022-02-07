import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    backgroundImage: `radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );`,
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '100px',
    marginBottom: 15
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize:36
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test button</Button>
}

function CheckboxExample() {
  return (
    <div>
      <Checkbox/>
    </div>
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>

            <Typography variant="h2">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material Ui
            </Typography>
            <ButtonStyled/>

            <Grid container spacing={2} justify="center">
              <Grid item xs={8} sm={6}>
                <Paper style={{height:75, width:`100%`}}/>
              </Grid>
              <Grid item xs={8} sm={6}>
                <Paper style={{height:75, width:`100%`}}/>
              </Grid>
              <Grid item xs={8} sm={6}>
                <Paper style={{height:75, width:`100%`}}/>
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              tyle="date"/>
            <CheckboxExample/>
            <ButtonGroup variant="contained">
            <Button
              startIcon={<SaveIcon/>}
              
              color="primary"
              size="large">
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon/>}
              color="secondary"
              size="large">
              Discard
            </Button>
            </ButtonGroup>
            <Button
              variant=""
              size="large" 
              variant="contained">
              Hello World
            </Button>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
