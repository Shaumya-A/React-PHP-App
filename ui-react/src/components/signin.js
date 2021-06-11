import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';

class Signin extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            users: [],
            username: '',
            password: '',
            redirect: false
        }
    }

    // usersList(){
    //     return this.state.users.map(function(object, i){
    //         return <RecordList obj={object} key={i} />;
    //     });
    // }

    onChangeUsername(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        };

        axios.get('http://localhost/bizlogic/viewUsers.php')
        .then(response => {
             this.setState({ users: response.data });
        })
        .catch(function(error) {
            console.log(error);
        })

        // this.state.users.map(users => (
        //     if (users.username === this.state.username) {

        //     }
        // ))

        // return array.find((element) => {
        //     return element.isEdit === true;
        //   })

        // eslint-disable-next-line array-callback-return
        this.state.users.find((element) => {
            if(element.username === this.state.username) {
                if(this.element.password === this.state.password) {
                    this.setState({ redirect: true })
                }
            }
        })

        this.setState({
            first_name: '',
            last_name: '',
            email: ''
        })
    }

    render() { 
        const { redirect } = this.state;
                         
        if(redirect) {
            return <Redirect to='/view' />;
        }

        return ( 
            <div style={{ marginTop: 10 }}>
                <h2>Login Page</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control" value={this.state.password} onChange={this.onChangePassword} />

                    </div>


                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                        {/* <Link to={"/view"} className="btn btn-primary">login</Link> */}
                    </div>

                </form>
            </div>
         );
    }
}
 
export default Signin;