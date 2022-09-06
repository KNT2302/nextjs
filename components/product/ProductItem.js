import Link from "next/link"
import style from "../../styles/product.module.scss"

const ProductItem = ({ product }) => {

  const useLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a className="btn btn-info mr-1 flex-fill" style={{ marginLeft: "5px", flex: 1 }}>View</a>
        </Link>
        <button className="btn btn-success ml-1 flex-fill" style={{ marginRight: "5px", flex: 1 }}>Bye</button>
      </>
    )
  }
  return (
    <div className={style.card} style={{ width: "18rem" }}>
      <img className={style.card_img_top} src={product.images[0].url} alt={product.images[0].url} />
      <div className={style.card_body}>
        <h5 className={style.card_title} title={product.title}>{product.title}</h5>
        <div className="row justify-content-between mx-0">
          <h6 className="text-danger">${product.price}</h6>
          {
            product.inStock > 0
              ? <h6 className="text-danger">In Stock: {product.inStock}</h6>
              : <h6 className="text-danger">Out Stock</h6>
          }
        </div>
        <p className={style.card_text} title={product.description}>{product.description}</p>
        <div className="row justify-content-between mx-0">
          {
            useLink()
          }
        </div>
      </div>
    </div>
  )
}

export default ProductItem
