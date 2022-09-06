import React from 'react'
import { getData } from '../../utils/fetchData'

const DetailProduct = ({ product }) => {
  return (
    <div>{product.images[0].url}</div>
  )
}



export async function getServerSideProps({ params: { id } }) {

  const res = await getData(`product/${id}`)

  return {
    props: {
      product: res.product
    }
  }
}

export default DetailProduct
