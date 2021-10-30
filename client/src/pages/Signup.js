import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
  //   <div className="container my-1">
  //     <Link to="/login">
  //       ← Go to Login
  //     </Link>

  //     <h2>Signup</h2>
  //     <form onSubmit={handleFormSubmit}>
  //       <div className="flex-row space-between my-2">
  //         <label htmlFor="firstName">First Name:</label>
  //         <input
  //           placeholder="First"
  //           name="firstName"
  //           type="firstName"
  //           id="firstName"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="flex-row space-between my-2">
  //         <label htmlFor="lastName">Last Name:</label>
  //         <input
  //           placeholder="Last"
  //           name="lastName"
  //           type="lastName"
  //           id="lastName"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="flex-row space-between my-2">
  //         <label htmlFor="email">Email:</label>
  //         <input
  //           placeholder="youremail@test.com"
  //           name="email"
  //           type="email"
  //           id="email"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="flex-row space-between my-2">
  //         <label htmlFor="pwd">Password:</label>
  //         <input
  //           placeholder="******"
  //           name="password"
  //           type="password"
  //           id="pwd"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="flex-row flex-end">
  //         <button type="submit">
  //           Submit
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );

  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
       SignUp
    </Header>
    <Form size='large' onSubmit={handleFormSubmit}>
      <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' type='firstName' id="firstName" name="firstName" placeholder='First Name' onChange={handleChange} />
        <Form.Input fluid icon='user' iconPosition='left' type='lastName' id="lastName" name="lastName" placeholder='Last Name' onChange={handleChange} />
        <Form.Input fluid icon='user' iconPosition='left' type='email' id="email" name="email" placeholder='E-mail address' onChange={handleChange} />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          id='password'
          name='password'
          onChange={handleChange}
        />
        <Button color='teal' fluid size='large' type ="submit">
          Login
        </Button>
      </Segment>
    </Form>
    <Message>
      New to us? <Link to="/signup">Sign Up</Link>
    </Message>
  </Grid.Column>
</Grid>
  );

}

export default Signup;
