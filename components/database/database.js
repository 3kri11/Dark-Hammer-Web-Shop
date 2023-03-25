export const COLORS = 
{
    white: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#898989',
    backgroundBlack: '#777777',
}   

export const Items =[
    {
        id:1,
        category:"product",
        productName:"",
        productPrice:1799,
        description:"Something",
        isOff:true,
        isAvailable:true,
        offPrecentage:10,
        productImage:require('../database/images/products/pic1.jpeg'),
        productImageList:[
            require('../database/images/products/pic1.jpeg'),
            require('../database/images/products/pic2.jpeg'),
            require('../database/images/products/pic3.jpeg'),
            
        ]
    },
    {
        id:2,
        category:"product",
        productName:"",
        productPrice:1499,
        description:"Something2",
        isOff:false,
        isAvailable:false,
        offPrecentage:10,
        productImage:require('../database/images/products/pic4.jpeg'),
        productImageList:[
            require('../database/images/products/pic5.jpeg'),
            require('../database/images/products/pic6.jpeg'),
            require('../database/images/products/pic7.jpeg'),
            
        ]
    },
    {
        id:3,
        category:"accesoriy",
        productName:"",
        productPrice:3999,
        description:"Something3",
        isOff:false,
        isAvailable:true,
        offPrecentage:10,
        productImage:require('../database/images/accesories/band.jpeg'),
        productImageList:[
            require('../database/images/accesories/nanobuds.jpeg'),
            require('../database/images/accesories/neclkace.jpeg'),
            require('../database/images/accesories/ring1.jpeg'),
        ]
    },
    {
        id:4,
        category:"accesoriy",
        productName:"",
        productPrice:3999,
        description:"Something4",
        isOff:false,
        isAvailable:false,
        offPrecentage:10,
        productImage:require('../database/images/accesories/bracelet4.jpeg'),
        productImageList:[
            require('../database/images/accesories/sunglasses.jpeg'),
            require('../database/images/accesories/ring2.jpeg'),
            require('../database/images/accesories/sunglasses2.jpeg'),
        ]
    }
]