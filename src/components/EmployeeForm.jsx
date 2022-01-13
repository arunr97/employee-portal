import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { addEmployee } from "../actions/action-creators";


class EmployeeForm extends Component {
    constructor() {
        super();
        this.state = {
            employee: {
                LocationID: "",
                EmpCode: "",
                Name: "",
                Age: 0,
                Location: "",
                Designation: "",
                Department: ""
            },
            errors: {
                name: '',
                age: '',
                designation: '',
                department: '',
                location: '',
                locationID: '',
                empCode: ''
            },
            redirct: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { errors, employee } = this.state;
        switch (name) {
            case "EmpCode":
                if (value.length != 4) {
                    this.setState({ errors: { ...errors, empCode: 'Employee code length must be equal to 4' } });
                } else {
                    this.setState({ errors: { ...errors, empCode: '' } });
                }
                break;
            case "Name":
                let exists = false;
                for (var ch of value) {
                    if (['$', '@', '!', '%', '^', '&', '*', '(', ')', '-', '_', '+', '='].indexOf(ch) >= 0) {
                        exists = true;
                    }
                }
                if (exists) {
                    this.setState({ errors: { ...errors, Name: 'Name should not contain special characters' } });
                }
                else {
                    this.setState({ errors: { ...errors, Name: '' } });
                }
                break;

            default:
                break;
        }
        this.setState({
            employee: { ...employee, [name]: value }
        })

    }

    async handleSubmit(e) {
        e.preventDefault();
        const { errors, employee } = this.state;
        this.props.addEmployee(employee);
        this.setState({ redirect: true });
        console.log(employee);
    }


    render() {
        if (this.state.redirect) {
            return <Navigate to={"/"}></Navigate>
        }
        return (<Container>
            <Row>
                <Col className="col-md-6 mx-auto">
                <h2>Employee-Create</h2>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="empCode">
                            <Form.Label>Employee Code</Form.Label>
                            <Form.Control type="text" value={this.state.employee.EmpCode} name="EmpCode" onChange={this.handleChange} required placeholder="Enter employee Code" />
                            <div className="text-danger">{this.state.errors.empCode}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={this.state.employee.Name} name="Name" onChange={this.handleChange} placeholder="Enter employee name" />
                            <div className="text-danger">{this.state.errors.name}</div>
                            <div className="text-danger">{this.state.errors.Name}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" value={this.state.employee.Age} name="Age" onChange={this.handleChange} placeholder="Enter employee age" />
                            <div className="text-danger">{this.state.errors.age}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" value={this.state.employee.Designation} name="Designation" onChange={this.handleChange} placeholder="Enter Designation" />
                            <div className="text-danger">{this.state.errors.designation}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="department">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" value={this.state.employee.Department} name="Department" onChange={this.handleChange} placeholder="Enter Department" />
                            <div className="text-danger">{this.state.errors.department}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="locId">
                            <Form.Label>Location ID</Form.Label>
                            <Form.Control type="text" value={this.state.employee.LocationID} name="LocationID" onChange={this.handleChange} placeholder="Enter Location ID" />
                            <div className="text-danger">{this.state.errors.locationID}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" value={this.state.employee.Location} name="Location" onChange={this.handleChange} placeholder="Enter Location" />
                            <div className="text-danger">{this.state.errors.location}</div>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>


                    </Form>
                </Col>
            </Row>
        </Container>)
    }
}

function mapDispatchToProps(dispatch){
    let actionMap={
        addEmployee
        //updateEmployee:updateEmployee
    }
    return bindActionCreators(actionMap,dispatch);
}

export default connect(null,mapDispatchToProps)(EmployeeForm);