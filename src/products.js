
const products = [
    {
        id: "1",
        titulo: "Polera",
        slug:"polera",
        categoria: "ninos",
        image: "https://img.ltwebstatic.com/images3_pi/2020/10/27/1603777109d8f734b5d5ce5b87a5b7524cfcfb2fa8_thumbnail_600x.jpg",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 8000
    },

    {
        id: "2",
        titulo: "Pantalón",
        slug:"pantalon",
        categoria: "adulto",
        image: "/images/polera1.jpg",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 4000
    },

    {
        id: "3",
        titulo: "Zapatilla",
        slug:"zapatilla",
        categoria: "adulto",
        image: "/images/polera1.jpg",
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

