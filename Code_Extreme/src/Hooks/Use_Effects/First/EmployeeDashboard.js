import React, { useEffect } from 'react'

function EmployeeDashboard() {
// UseEffectFirst : Runs after the component renders.
// []             : Runs only once when the page loads.

    useEffect(()=>{
          console.log("Employee Dashboard Loaded");
          console.log("API calls, load dashboard, fetch customers, products")
    },[]);

  return (
    <div>Employee Dashboard</div>
  )
}

export default EmployeeDashboard