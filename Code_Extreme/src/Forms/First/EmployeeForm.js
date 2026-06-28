import React from 'react'
import { useState } from 'react'

function EmployeeForm() {

    const [employeeName, setEmployeeName] = useState("");
    return (
        <>
            <h2>Employee Registration</h2>

            <label>Employee Name</label>

            <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />

            <h3>Employee :{employeeName}</h3>
        </>
    )
}

export default EmployeeForm