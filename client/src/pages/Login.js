import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
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
  //     <Link to="/signup">
  //       ← Go to Signup
  //     </Link>

  //     <h2>Login</h2>
  //     <form onSubmit={handleFormSubmit}>
  //       <div className="flex-row space-between my-2">
  //         <label htmlFor="email">Email address:</label>
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
  //       {
  //         error ? <div>
  //           <p className="error-text" >The provided credentials are incorrect</p>
  //         </div> : null
  //       }
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
       Log-in to your account
    </Header>
    <Form size='large' onSubmit={handleFormSubmit}>
      <Segment stacked>
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
        {
          error ? <div>
            <p className="error-text" >The provided credentials are incorrect</p>
          </div> : null
        }

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


export default Login;
