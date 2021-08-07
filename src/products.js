
const products = [
    {
        id: 1,
        titulo: "Air Jordan XXXV Low Quai 54",
        slug:"air-jordan-XXXV-Low-Quai-54",
        categoria: "jordan",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/607248c9-08da-4991-b216-5db7f5e4a81d/calzado-de-b%C3%A1squetbol-air-jordan-35-low-quai-54-z1GTFq.png",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 136.990,
    },

    {
        id: 2,
        titulo: "Air Jordan 11 CMFT Low Quai 54",
        slug:"Air-Jordan-11-CMFT-Low-Quai-54",
        categoria: "jordan",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0b518633-bd79-4a3b-9a87-9b2b4393cf65/calzado-air-jordan-11-cmft-low-quai-54-w38Brq.png",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 4000
    },

    {
        id: 3,
        titulo: "Jordan Point Lane",
        slug:"Jordan-Point-Lane",
        categoria: "jordan",
        image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1af2fbd8-baf4-4b61-8208-0c0432236731/calzado-jordan-point-lane-kBMmSV.png",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 3000
    },

    {
        id: 4,
        titulo: "Nike Air Zoom Pegasus 38",
        slug:"Nike-Air-Zoom-Pegasus-38",
        categoria: "running",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b14d02a-fb19-4cf6-9110-4302b7e7020f/calzado-de-running-de-carretera-air-zoom-pegasus-38-B880NC.png",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 3000
    },

    {
        id: 5,
        titulo: "Nike Wildhorse 7",
        slug:"Nike-Wildhorse-7",
        categoria: "running",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7834f3ae-c7af-4c90-b91e-b5c6903532a6/calzado-de-trail-running-wildhorse-7-pk8zBf.png",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 3000
    },



]

const llamado = new Promise((res)=>{
    setTimeout(() => {
        res(products)
    }, 2000); 
})

export const getProducts=()=>{
    return(
       
        llamado
    )
}

export const getProduct=()=>{
    return(
        llamado
    )
}
export default products

