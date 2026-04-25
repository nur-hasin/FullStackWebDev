import './App.css';
// import TicketNum from './TicketNum.jsx';
// import Ticket from './Ticket.jsx';
import Lottery from './Lottery.jsx';
import { sum } from './helper.js';

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15 && ticket.every(num => num === ticket[0]);
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
