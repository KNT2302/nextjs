import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import valid from "../utils/valid"
import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'

const Register = () => {
  const initialState = { name: '', email: '', cf_password: '', password: '' }
  const [userData, setUserData] = useState(initialState)

  const [, dispatch] = useContext(DataContext)
  const { name, email, cf_password, password } = userData
  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) {
      return dispatch({ type: "NOTIFY", payload: { error: errMsg } })
    }

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('auth/register', userData)

    if (res.err) {
      return dispatch({ type: "NOTIFY", payload: { error: res.err } })
    }

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } })
  }
  return (
    <div>
      <Head>
        <title>Register page</title>
      </Head>
      <form className='mx-auto my-4' style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputPassword3">Name</label>
          <input type="text" className="form-control" id="exampleInputPassword3" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleChangeInput} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handleChangeInput} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2" name="cf_password" value={cf_password} onChange={handleChangeInput} />
        </div>
        <button type="submit" className="btn btn-dark w-100">Register</button>
        <p>Already have an account <Link href="/signin"><a style={{ color: "red" }}>Login Now</a></Link></p>
      </form>
    </div>
  )
}

export default Register
