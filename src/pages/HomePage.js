import React,{Component} from "react";
import {Navbar, NavbarBrand,} from 'reactstrap';
import UserListComponent from "../component/UserListComponent";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);

        this.state={
            users:[
                {
                    id: uuidv4(),
                    name: "Mert",
                    lastname: "Koçlar",
                    username: "mertkoclar"
                },
                {
                    id: uuidv4(),
                    name: "Taha",
                    lastname: "Koçlar",
                    username: "tahakoclar"
                },
                {
                    id: uuidv4(),
                    name: "Mark",
                    lastname: "Otto",
                    username: "mdo"
                },
            ],
        }
    };
    addUser = (name,lastname,username)=>{
        if((name,lastname,username)){
            const users = [...this.state.users];
            users.push({
                id: uuidv4(),
                name:name,
                lastname:lastname,
                username:username
            });
            this.setState({users});

            withReactContent(Swal).fire({
                position: "top-end",
                toast: true,
                icon: "success",
                title: name + " added successfully!",
                showConfirmButton: false,
                timer: 2500,
                backdrop: false,
                timerProgressBar: true,
            })
        }else{
            withReactContent(Swal).fire({
                position: "top-end",
                toast: true,
                icon: "warning",
                title: "Please fill all fields!",
                showConfirmButton: false,
                timer: 2500,
                backdrop: false,
                timerProgressBar: true,
            })
        }
    };
    deleteUser = (obj) =>{
        const users = this.state.users.filter(user=>{
            return user.id !== obj.id;
        })
        this.setState({users})

        withReactContent(Swal).fire({
            position: "top-end",
            toast: true,
            icon: "success",
            title: obj.name + " deleted successfully!",
            showConfirmButton: false,
            timer: 2500,
            backdrop: false,
            timerProgressBar: true,
        })
    }

    editUser = (id,name,lastname,username) => {
        if(id,name,lastname,username){
            const users = [...this.state.users];
            let updatedUsers = users.map((user) => {
                if(user.id === id){
                    user = {
                        id:id,
                        name:name,
                        lastname:lastname,
                        username:username
                    }
                }
                return user;
            })
            this.setState({users: updatedUsers})
        }
    }
    render() {
        return (
            <div>
                <Navbar className="m-2 rounded-4" color="dark" dark>
                    <NavbarBrand href="/">MertKoclar</NavbarBrand>
                </Navbar>
                <UserListComponent users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser} editUser={this.editUser} />
            </div>
        )
    }
}

export default HomePage;