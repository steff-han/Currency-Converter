import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

function ConvertCurrency({expenseData}) {

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