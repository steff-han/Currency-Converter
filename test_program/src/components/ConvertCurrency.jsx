import { useState } from 'react';

function ConvertCurrency({expenseData}) {

    const handleConversion = async () => {
        try {
            const response = await fetch(
                `/convert`, {
                    method: 'PUT', 
                    headers: {'Content-type': 'application/json'}, 
                    body: JSON.stringify(expenseData)
                }
            );

            if (response.status === 200){
                alert("Sucessfully converted amount!");
            } else {
                alert("Failed to convert, status code = " + response.status);
            }
        } catch (err){
            alert(error.message);
        }
    };

    return (
        <button
            onClick={handleConversion}
        > Click to Convert </button>
    )
}

export default ConvertCurrency;