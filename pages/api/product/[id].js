import connectDB from "../../../utils/connectDB"
import Products from "../../../models/productModel"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res)
      break
  }
}

const getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.query.id)

    if (!product) return res.status(400).json("This status does not exist")
    res.json({
      product
    })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}
