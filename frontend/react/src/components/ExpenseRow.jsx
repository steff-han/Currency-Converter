
function ExpenseRow({expense}){

    return (
        <tr> 
            <td> {expense.date} </td>
            <td> {expense.name} </td>
            <td> {expense.category} </td>
            <td> {expense.amount} </td>
            <td> {expense.zipCode} </td>
            <td> {expense.email} </td>
        </tr>
    );
}

export default ExpenseRow;