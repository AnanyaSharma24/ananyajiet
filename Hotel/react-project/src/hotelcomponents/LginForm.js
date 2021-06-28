import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { HBInput } from 'Hotel/react-project/src/forms/HBInput';
import { HBResError } from 'Hotel/react-project/src/forms/HBResError';
import { required, minLength4 } from 'Hotel/react-project/src/forms/validator';


const LoginForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>


          

            <Field
                name="email"
                
                type="email"
                label='Email'
                className="form-control"
                component={HBInput}
                validate={[required, minLength4]}
            />

            <Field
                name="password"
                
                type="password"
                label='Password'
                className="form-control"
                component={HBInput}
                validate={[required]}
            />

           



            <button className="btn btn-bwm btn-form" type="submit" disabled={!valid || pristine || submitting}>
                Login
        </button>
        <HBResError errors={errors}/>

        </form>
    )
}