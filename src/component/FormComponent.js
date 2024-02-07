import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            name: "",
            lastname: "",
            username: "",
        };
    }
    onSubmit(){
        this.props.addUser(
            this.state.name,
            this.state.lastname,
            this.state.username,
        );
        this.props.hide();
    }
    onUpdate(){
        this.props.editUser(
            this.state.id,
            this.state.name,
            this.state.lastname,
            this.state.username,
        );
        this.props.hide();
    }

    componentDidMount() {
        this.setState({
            id: this.props.user.id,
            name: this.props.user.name,
            lastname: this.props.user.lastname,
            username: this.props.user.username,
        })
    }

    render() {
        return (
            <>
                <Modal isOpen={this.props.visible}>
                    <ModalHeader>{this.props.user.id ? <>User <b> {this.props.user.name} </b> update
                    </> : <>Add user</>}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} id="name" name="name" type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastname">Lastname</Label>
                                <Input onChange={(e) => this.setState({lastname: e.target.value})} value={this.state.lastname} id="lastname" name="lastname" type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input onChange={(e) => this.setState({username: e.target.value})} value={this.state.username} id="username" name="username" type="text"/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.user.id ?
                            (<Button color="success" onClick={() => this.onUpdate()}>Update</Button>)
                            : (<Button color="success" onClick={() => this.onSubmit()}>Add</Button>)}
                        <Button color="danger" onClick={() => this.props.hide()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default FormComponent;