const products = [  
    {id:1, 
        name: 'Chamonix 75mm', 
        price: '150 uds', 
        img: 'https://i.blogs.es/15b990/432_660_lomo1/450_1000.jpg',
        description: 'Iluminá la escena. La Lomography Diana F+ con Flash te permitirá sacar fotos vibrantes a cualquier hora del día, gracias a su flash incorporado.',
        distancia: '75 mm.',
        rollo: '35 mm.',
        apertura: 'f/5.6.',
        flash: 'Si.'},

    {id:2, 
        name: 'CMYK Mag 75mm ', 
        price: '99 uds',   
        img: 'https://blogs.infobae.com/una-buena-foto/files/2013/06/camara-lomo-diana-f-cmyk-cflash-lomography_MLA-F-126737823_6416.jpg', 
        description: 'Expresa tu lado más divertido con este clon tan colorido de la CMYK. Tendrás lo mejor de la reina de medio formato con un vestido de lo más original.', 
        distancia: '75 mm.',
        rollo: '35 mm.',
        apertura: 'f/4.',
        flash: 'Si.'},
    {id:3, 
        name: 'Diana F+ 75mm', 
        price: '180 uds',  
        img: 'https://www.ds-km.com/wp-content/uploads/2021/05/lomo-diana-flash-910x1024.jpg', 
        description: 'Equipada con un fantástico flash, esta cámara analógica creativa iluminará tu mundo. Dispara imágenes de ensueño empapadas de color en películas de 120.',
        distancia: '75 mm.',
        rollo: '120 mm.',
        apertura: 'f/8',
        flash: 'Si.'}
    
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500 )
    })
}

export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[2]);
        }, 1000 )
    })
}