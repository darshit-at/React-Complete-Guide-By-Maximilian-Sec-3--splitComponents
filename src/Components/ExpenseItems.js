import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItems(props) {

    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div>
                <div className="expense-item__description" >
                    <h2>{props.title}</h2>
                    <h4 className='expense-item__price'>$ {props.amount}</h4>
                </div>
            </div>
        </div>
    )
};
export default ExpenseItems;