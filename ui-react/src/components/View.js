import axios from 'axios';
import React, { Component } from 'react';
import RecordList from './RecordList';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount(){
        axios.get('http://localhost/bizlogic/viewUsers.php')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    usersList(){
        return this.state.users.map(function(object, i){
            return <RecordList obj={object} key={i} />;
        });
    }

    render() { 
        return ( 
            <div>
                <h3 align="center">Users List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default View;