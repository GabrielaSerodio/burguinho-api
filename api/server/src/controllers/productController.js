import productService from '../services/productService'
import Util from '../utils/Utils'

const util = new Util()

class productController {
  static async getAllproducts(req, res) {
    try {
      const allproducts = await productService.getAllproducts()
      if (allproducts.length > 0) {
        util.setSuccess(200, 'products retrieved', allproducts)
      } else {
        util.setSuccess(200, 'No product found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addproduct(req, res) {
    console.log(req.body.name, req.body.is_alive)
    if (!req.body.name || !req.body.is_alive ) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newproduct = req.body
    try {
      const createdproduct = await productService.addproduct(newproduct)
      util.setSuccess(201, 'product Added!', createdproduct)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedproduct(req, res) {
    const alteredproduct = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateproduct = await productService.updateproduct(id, alteredproduct)
      if (!updateproduct) {
        util.setError(404, `Cannot find product with the id: ${id}`)
      } else {
        util.setSuccess(200, 'product updated', updateproduct)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getproduct(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theproduct = await productService.getproduct(id)

      if (!theproduct) {
        util.setError(404, `Cannot find product with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found product', theproduct)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteproduct(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const productToDelete = await productService.deleteproduct(id)

      if (productToDelete) {
        util.setSuccess(200, 'product deleted')
      } else {
        util.setError(404, `product with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default productController