import React, { useState } from "react";
import { EmployeeService } from "../services/EmployeeService";

let Employees = () => {

    let [state, setState] = useState({
        employees: EmployeeService.getAllEmployees()
    });

    let { employees } = state;

    let updateSelected = (empId) => {
        let selectedEmployees = employees.map(employee => {
            if(employee.id === empId){
                return {
                    ...employee,
                    isSelected : !employee.isSelected
                }
            }
            else return employee;
        });
        setState({
            ...state,employees: selectedEmployees
        });
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Employees</p>
                        <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {
                                employees.length > 0 &&
                                employees.map(employee => {
                                    return (
                                        <li key={employee.id} className="list-group-item">
                                            <input onChange={()=> updateSelected(employee.id)}  type="checkbox" className="form-check-input me-2" />
                                            {employee.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        {
                            employees.length > 0 &&
                            employees.map(employee => {
                                return (
                                    <div key={employee.id}>
                                        {
                                            employee.isSelected &&
                                            <div className="card my-2">
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            Name: <span className="fw-bold">{employee.name}</span>
                                                        </li>
                                                        <li className="list-group-item">
                                                            Email: <span className="fw-bold">{employee.email}</span>
                                                        </li>
                                                    </ul>

                                                </div>

                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default Employees;