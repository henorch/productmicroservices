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
            
        },
        searchProductbyPrice: async (_, {price}) => {
            
        }
    }
}

export default resolvers;