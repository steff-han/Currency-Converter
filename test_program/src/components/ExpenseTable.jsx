import ExpenseRow from "./ExpenseRow";

function ExpenseTable({expenseData, loadExpenses}){

    const handleConversion = async () => {
        try {
            const response = await fetch(
                `http://localhost:3002/convert`, {
                    method: 'PUT', 
                    headers: {'Content-type': 'application/json'}, 
                    body: JSON.stringify(expenseData)
                }
            );

            if (response.status === 200){
                alert("Sucessfully converted amount!");
                loadExpenses();

            } else {
                alert("Failed to convert, status code = " + response.status);
            }
        } catch (err){
            alert(error.message);
        }
    };

    return (
        <>
            <button onClick={handleConversion} className="curr-conv">
                Convert (MXN)
            </button>

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
        </>
    );
}

export default ExpenseTable;