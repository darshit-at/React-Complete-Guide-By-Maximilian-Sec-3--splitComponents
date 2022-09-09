import ExpenseItems from './Components/ExpenseItems';
import './App.css';

function App() {
  const expense =[
    {
      id:"e1",
    date:new Date(),
    amount:434,
    title:'Car Insurance'
    },
    {
      id:"e2",
    date:new Date(2022,8,18),
    amount:200,
    title:'Tiffin'
    },
    {
      id:"e3",
    date:new Date(),
    amount:20,
    title:'Bus Ticket'
    },
    {
      id:"e4",
    date:new Date(2022,7,20),
    amount:300,
    title:'New Dest'
    }
  ];

  return (
    <div>
        <h2>Let's start </h2>
        <ExpenseItems title={expense[0].title} date={expense[0].date} amount={expense[0].amount}></ExpenseItems>
        <ExpenseItems title={expense[1].title} date={expense[1].date} amount={expense[1].amount}> </ExpenseItems>
        <ExpenseItems title={expense[2].title} date={expense[2].date} amount={expense[2].amount}></ExpenseItems>
        <ExpenseItems title={expense[3].title} date={expense[3].date} amount={expense[3].amount}></ExpenseItems>
    </div>
  );
}

export default App;
