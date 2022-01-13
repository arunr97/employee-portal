import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { EmployeeContext } from "./Home";
import {Link} from "react-router-dom";
import { Trash } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteEmployee } from "../actions/action-creators";

function EmployeeList({deleteEmployee}) {

    const {data}  = useContext(EmployeeContext);
    //console.log('Data From Context', data);

    function handleDelete(locId,eCode,e){
        //console.log(locId,eCode);
        if(window.confirm("Do you want to delete the item?")){
        deleteEmployee(locId,eCode);
        }
    }

    return (<React.Fragment>
        <Link to="/employees/create" className="btn btn-success">Add Employee</Link>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Location ID</th>
                    <th>EmpCode</th>
                    <th>Name </th>
                    <th>Designation </th>
                    <th>Department</th>
                    <th>Location</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.LocationID}</td>
                                <td>{item.EmpCode}</td>
                                <td>{item.Name}</td>
                                <td>{item.Designation}</td>
                                <td>{item.Department}</td>
                                <td>{item.Location}</td>
                                <td><Link to={`/employees/loc/${item.LocationID}/ecode/${item.EmpCode}`}>Details</Link></td>
                                <td><Trash className="trash-style" onClick={(e)=>handleDelete(item.LocationID,item.EmpCode)}/></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table></React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    let actionMap={
        deleteEmployee
    }
    return bindActionCreators(actionMap, dispatch);
}

export default connect(null,mapDispatchToProps)(EmployeeList);