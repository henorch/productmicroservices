import productService from "./productService.js";




const resolvers = {
    Query:{
        products: async () => {
            try {
                const allproduct = await productService.getAllProduct()
                return allproduct
            } catch (error) {
                console.log(`cant return that product`);
                throw error
            }            
        },
        searchProuctbyString: async (_, {contain}) => {
            try {
                const productBytext = await productService.searchProuctbyString()
                return productBytext
            } catch (error) {
                console.log(`cant return that product`);
                throw error
            }            
           
        },
        searchProductbyPrice: async (_, {price}) => {
            try {
                const productByPrice = await productService.searchProductbyPrice()
                return productByPrice
            } catch (error) {
                console.log(`cant return that product`);
                throw error
            }            
            
        }
    }
}

export default resolvers;