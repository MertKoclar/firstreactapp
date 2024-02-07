import React, {Component} from 'react';
import {Alert, Table} from "reactstrap";
import FormComponent from "./FormComponent";


class UserListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            user:{}
        }
        this.hide = this.hide.bind(this);
    }

    hide(){
        this.setState({visible:false});
    }

    getElementById(value){
        this.setState({
            user:value,
            visible:true
        })
    }

    render() {
        return (
            <div className="mx-2 bg-dark p-4 rounded-4">
                <div className="d-flex flex-row justify-content-between">
                    <h2 className="text-white">Users</h2>
                    <button className="btn btn-success mb-4" onClick={() => this.setState({user:{}, visible:true})}>Add</button>
                </div>
                {this.state.visible ? (<FormComponent visible={this.state.visible} hide={this.hide} addUser={this.props.addUser} user={this.state.user} editUser={this.props.editUser} />) : null}
                {this.props.users.length > 0 ? (
                    <Table hover dark>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>@{user.username}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning" onClick={() => this.getElementById(user)}>Edit</button>
                                    &nbsp;
                                    <button className="btn btn-sm btn-danger" onClick={() => this.props.deleteUser(user)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                ) : (
                    <Alert color="warning">We don't have user - If u want add user click me</Alert>
                )}
            </div>
        );
    }
}

export default UserListComponent;