import productService from "./productService.js";




const resolvers = {
    Query:{
        products: async () => {
            try {
                return await productService.getAllProduct()
            } catch (error) {
                console.log(`cant return that product`);
            }            
        },
        searchProuctbyString: async (_, {contain}) => {
            
        },
        searchProductbyPrice: async (_, {price}) => {
            
        }
    }
}

export default resolvers;