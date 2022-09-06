import React from 'react'
import { DataContext } from '../store/GlobalState'
import { useContext } from 'react'
import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {

  const [state, dispatch] = useContext(DataContext)

  const { notify } = state

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      {notify.loading && <Loading />}
      {notify.error && <Toast
        msg={{ title: "Error", msg: notify.error }}
        handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
        bgColor="bg-danger"
      />}
      {notify.success && <Toast
        msg={{ title: "Success", msg: notify.success }}
        handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
        bgColor="bg-success"
      />}
    </div>
  )
}

export default Notify
