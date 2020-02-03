import database from '../src/models'

class productService {
  static async getAllproducts() {
    try {
      return await database.product.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addproduct(newProduct) {
    try {
      return await database.product.create(newProduct)
    } catch (error) {
      throw error
    }
  }

  static async updateproduct(id, updateProduct) {
    try {
      const productToUpdate = await database.product.findOne({
        where: { id: Number(id) }
      })

      if (productToUpdate) {
        await database.product.update(updateProduct, { where: { id: Number(id) } })

        return updateProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getproduct(id) {
    try {
      const theProduct = await database.product.findOne({
        where: { id: Number(id) }
      })

      return theProduct
    } catch (error) {
      throw error
    }
  }

  static async deleteproduct(id) {
    try {
      const productToDelete = await database.product.findOne({ where: { id: Number(id) } })

      if (productToDelete) {
        const deletedProduct = await database.product.destroy({
          where: { id: Number(id) }
        })
        return deletedProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default productService;