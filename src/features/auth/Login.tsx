import React from 'react';
import {useFormik} from "formik";
import s from './Login.module.scss'
import {useRootStore} from "../../store/RootStateContext";
import {Navigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}


export const Login = observer(() => {
  const {auth} = useRootStore()

  console.log('auth', auth.initialState.isLoggedIn)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },

    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (values.password.length < 3) {
        errors.password = 'Required'
      }
      return errors
    },
    onSubmit: async () => {
      await auth.loginTC(formik.values)
    }

    // onSubmit: async (values: FormValuesType, formikHelpers: FormikHelpers<FormValuesType>) => {
    //   const action = await dispatch(loginTC(values))
    //
    //   if (loginTC.rejected.match(action)) {
    //     if (action.payload?.fieldsErrors?.length) {
    //       const error = action.payload.fieldsErrors[0]
    //       formikHelpers.setFieldError(error.field, error.message)
    //     }
    //   }
    // },
  })

  if (auth.initialState.isLoggedIn) {
    console.log(1111)
    return <Navigate to="/"/>
  }

  return (
    <div className={s.containerForm}>
      <div className={s.form}>
        <div className={s.containerDescription}>
          <p>To log in get registered
            <a href={'https://social-network.samuraijs.com/'}
               target={'_blank'}> here
            </a>
          </p>
          <p>or use common test account credentials:</p>
          <p>Email: free@samuraijs.com</p>
          <p>Password: free</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            type='email'
            placeholder={'Email'}
            {...formik.getFieldProps('email')}
          />
          {/*{formik.touched.email && formik.errors.email &&*/}
          {/*	<div style={{color: 'red'}}>{formik.errors.email}</div>}*/}

          <input
            type='password'
            placeholder={'Password'}
            {...formik.getFieldProps('password')}
          />
          {/*{formik.touched.password && formik.errors.password &&*/}
          {/*	<div style={{color: 'red'}}>{formik.errors.password}</div>}*/}

          <div>
            <input
              type="checkbox"
              {...formik.getFieldProps('rememberMe')}
            />

            <button type='submit'>
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  );
});
