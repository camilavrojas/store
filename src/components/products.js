const products = [  
    {id: 1 , 
        name: 'Chamonix 75mm', 
        price: '150 uds', 
        img: 'https://i.blogs.es/15b990/432_660_lomo1/450_1000.jpg',
        description: 'Iluminá la escena. La Lomography Diana F+ con Flash te permitirá sacar fotos vibrantes a cualquier hora del día, gracias a su flash incorporado.',
        distancia: '75 mm.',
        rollo: '35 mm.',
        apertura: 'f/5.6.',
        flash: 'Si.',
        category: 'camara'},

    {id: 2 , 
        name: 'CMYK Mag 75mm ', 
        price: '99 uds',   
        img: 'https://blogs.infobae.com/una-buena-foto/files/2013/06/camara-lomo-diana-f-cmyk-cflash-lomography_MLA-F-126737823_6416.jpg', 
        description: 'Expresa tu lado más divertido con este clon tan colorido de la CMYK. Tendrás lo mejor de la reina de medio formato con un vestido de lo más original.', 
        distancia: '75 mm.',
        rollo: '35 mm.',
        apertura: 'f/4.',
        flash: 'Si.',
        category: 'camara'},
    {id: 3 , 
        name: 'Diana F+ 75mm', 
        price: '180 uds',  
        img: 'https://www.ds-km.com/wp-content/uploads/2021/05/lomo-diana-flash-910x1024.jpg', 
        description: 'Equipada con un fantástico flash, esta cámara analógica creativa iluminará tu mundo. Dispara imágenes de ensueño empapadas de color en películas de 120.',
        distancia: '75 mm.',
        rollo: '120 mm.',
        apertura: 'f/8',
        flash: 'Si.',
        category: 'camara'},
    {id: 4 , 
        name: 'Diana Instant Sq', 
        price: '180 uds',  
        img: 'https://www.fotodng.com/wp-content/uploads/2018/06/diana-instant-square.jpg', 
        description: 'Equipada con una increíble gama de funciones experimentales: exposiciones múltiples y largas ilimitadas, un espejo selfie y muchos accesorios como el Splitzer, Filtros de Densidad de Color y Neutral, y mucho más.',
        distancia: '75 mm',
        rollo: '35 mm.',
        apertura: '2.8',
        flash: 'Si.',
        category: 'camara'},
    {id: 5 , 
        name: 'Metro- Tokyo Ed', 
        price: '51 uds',  
        img: 'https://i2.wp.com/tienda.c41.com.ar/wp-content/uploads/2021/09/metropolis_tokyo_fordesigner_fim_and_tin.jpg?fit=1776%2C1776&ssl=1', 
        description: 'Una fórmula química única que desatura los colores y hace que los contrastes destaquen, ¡ahora en una edición muy especial celebrando los 20 años de Lomography Japan! ',
        distancia: 'No aplica.',
        rollo: '35 mm.',
        apertura: 'No aplica.',
        flash: 'No aplica.',
        category: 'rollo'},
    {id: 6 , 
        name: 'Metropolis LM', 
        price: '58 uds',  
        img: 'https://i0.wp.com/tienda.c41.com.ar/wp-content/uploads/2020/09/LC-Metropolis.jpg?fit=1920%2C1920&ssl=1', 
        description: 'Esta película viene con una fórmula química única, desarrollada específicamente en nuestra factoría de películas Lomography, que desatura los colores, silencia los tonos y hace que los contrastes destaquen.',
        distancia: 'No aplica.',
        rollo: '35 mm.',
        apertura: 'No aplica.',
        flash: 'No aplica.',
        category: 'rollo'},
    {id: 7 , 
        name: 'Adox CMS 20 II ', 
        price: '30 uds',  
        img: 'https://i0.wp.com/tienda.c41.com.ar/wp-content/uploads/2016/12/cms20.jpg?fit=4252%2C4252&ssl=1', 
        description: 'Ninguna otra película es más nítida, ninguna otra película tiene más grano fino, ninguna otra película resuelve más líneas por mm (hasta 800 l/mm). ',
        distancia: 'No aplica.',
        rollo: '35 mm.',
        apertura: 'No aplica.',
        flash: 'No aplica.',
        category: 'rollo'},
    {id: 8 , 
        name: 'Lomography 100', 
        price: '37 uds',  
        img: 'https://i1.wp.com/tienda.c41.com.ar/wp-content/uploads/2016/01/575805-1024-10241.jpg?fit=709%2C709&ssl=1', 
        description: 'La película Negativo Color Lomography 100 35mm ofrece un grano fino y unos matices sensacionales, que dan como resultado unas fotos con colores vivos y una nitidez insuperable.',
        distancia: 'No aplica.',
        rollo: '120 mm.',
        apertura: 'No aplica.',
        flash: 'No aplica.',
        category: 'rollo'}
    ]


const categories = [
    {id: 'rollo', description: 'Rollos'},
    {id: 'camara', description: 'Cámaras'}
]


export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)        
    })
}

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        category ? resolve(products.filter(product => product.category === category)): resolve(products)
      }, 500);
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 500)
    })
}

export const getItem = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 500)        
    })
}
  