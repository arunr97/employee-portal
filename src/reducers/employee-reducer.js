import * as ActionTypes from '../actions/actions-types';

const initialState = {
    employees: [
        //    {LocationID:'MUMB',Name : 'ABC',Age:30,Department:'FUNC',Designation:'Something',Location:'Mumbai',EmpCode:'E101'},
        //    {LocationID:'PUNE',Name : 'DEF',Age:31,Department:'RFCA',Designation:'else',Location:'Pune',EmpCode:'E102'}
    ],
    employee: undefined

}
function employeeReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.GET_EMPLOYEE:
            return state = { ...state, employee: payload };

        case ActionTypes.ADD_EMPLOYEE:
            return { ...state, employees: [...state.employees, payload] }

        case ActionTypes.DELETE_EMPLOYEE:
            //  let index = state.employees.findIndex(item=>item.LocationID === payload.locationId && item.EmpCode===payload.empCode);
            //  return {...state,employees:state.employees.splice(index,1)};
            let dItem = state.employees.find(item => item.LocationID == payload.locationId && item.EmpCode === payload.empCode);
            return { ...state, employees: state.employees.filter((item) => dItem != item) };

        case ActionTypes.GET_EMPLOYEES:
            return { ...state, employees: payload }

        default:
            return state;
    }
}

export default employeeReducer;