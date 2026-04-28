import './App.css';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <>
      {/* <Button variant="text">Click me</Button>
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => console.log('button clicked!')}>
        Delete
      </Button>
      <Button variant="contained" color="success" size="small">Click me</Button>
      <Button variant="contained" disabled >
        Click me
      </Button>
      <Alert severity="warning">Delete option is given!</Alert> */}
      <WeatherApp />
    </>
  );
}

export default App;
