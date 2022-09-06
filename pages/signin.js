import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import Head from 'next/head'
import Link from 'next/link'
import { postData } from '../utils/fetchData'
import Cookie from "js-cookie"
import { useRouter } from 'next/router'

const Signin = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)

  const [state, dispatch] = useContext(DataContext)

  const { email, password } = userData
  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const router = useRouter()
  const { auth } = state

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push('/')
  }, [auth])

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('auth/login', userData)

    if (res.err) {
      return dispatch({ type: "NOTIFY", payload: { error: res.err } })
    }

    dispatch({ type: "NOTIFY", payload: { success: res.msg } })

    dispatch({
      type: "AUTH", payload: {
        refresh_token: res.access_token,
        user: res.user
      }
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }
  return (
    <div>
      <Head>
        <title>Sign in page</title>
      </Head>
      <form className='mx-auto my-4' style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleChangeInput} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={handleChangeInput} />
        </div>
        <button type="submit" className="btn btn-dark w-100">Sign in</button>
        <p>You don't have an account <Link href="/register"><a style={{ color: "red" }}>Register</a></Link></p>
      </form>
    </div>
  )
}

export default Signin
