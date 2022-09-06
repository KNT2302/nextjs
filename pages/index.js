import React from 'react'
import { getData } from "../utils/fetchData"
import { useState } from "react"
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'
import style from "../styles/product.module.scss"

const Home = (props) => {
  const [products, setProducts] = useState(props.products)

  return (

    <div className={style.products}>
      <Head>
        <title>Home page</title>
      </Head>

      {
        products.length === 0
          ? <h2>No Products</h2>
          : products.map(product =>
            (<ProductItem key={product._id} product={product} />)
          )
      }
    </div>
  )
}




export async function getServerSideProps() {

  const res = await getData('product')

  return {
    props: {
      products: res.products,
      result: res.result
    }
  }
}

export default Home
