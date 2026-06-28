import React, { useState } from 'react'

function EmployeeCounter() {

    const [employeeCount, UpdateCount] = useState(100);


    return (
        <div>
            <div>Use State First</div>
            <h2>Employee Count</h2>

            <h3>{employeeCount}</h3>

            <div style={{ backgroundColor: "yellow" }}>
                <button onClick={() => UpdateCount(employeeCount + 1)}>Hire Employee</button>

                <button onClick={() => UpdateCount(employeeCount - 1)}>Remove Employee</button>
            </div>
        </div>


    )
}

export default EmployeeCounter