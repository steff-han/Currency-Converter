import ExpenseRow from "./ExpenseRow";

function ExpenseTable({expenseData}){

    return (
        <table border="5">
            <thead> 
                <tr> 
                    <th> Date </th>
                    <th> Name </th>
                    <th> Category </th>
                    <th> Amount </th>
                    <th> Zipcode </th> 
                    <th> Email </th>
                </tr>
            </thead>

            <tbody> 
                {expenseData.map((item, i) => 
                    <ExpenseRow expense={item} key={i} />
                )}
            </tbody>
        </table>
    );
}

export default ExpenseTable;