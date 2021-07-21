
const products = [
    {
        id: "1",
        titulo: "Polera",
        image: "https://img.ltwebstatic.com/images3_pi/2020/10/27/1603777109d8f734b5d5ce5b87a5b7524cfcfb2fa8_thumbnail_600x.jpg",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 8000
    },

    {
        id: "2",
        titulo: "Pantalón",
        image: "/images/polera1.jpg",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 4000
    },

    {
        id: "3",
        titulo: "Zapatilla",
        image: "/images/polera1.jpg",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 3000
    },

    {
        id: "3",
        titulo: "Zapatilla",
        image: "/images/polera1.jpg",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 3000
    },

    {
        id: "3",
        titulo: "Zapatilla",
        image: "/images/polera1.jpg",
        descripcion: "Lorem imspum dolor sit amet.",
        price: 3000
    },

    {
        id: "3",
        titulo: "Zapatilla",
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
    console.log(llamado)
    return(
       
        llamado
    )
}

export default products

