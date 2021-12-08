const products = [  
    {id:1, name: 'Chamonix 75mm', price: '150 uds', img: 'https://i.blogs.es/15b990/432_660_lomo1/450_1000.jpg'},
    {id:2, name: 'CMYK Mag 75mm ', price: '99 uds',   img: 'https://blogs.infobae.com/una-buena-foto/files/2013/06/camara-lomo-diana-f-cmyk-cflash-lomography_MLA-F-126737823_6416.jpg'},
    {id:3, name: 'Diana F+ 75mm', price: '180 uds',  img: 'https://www.ds-km.com/wp-content/uploads/2021/05/lomo-diana-flash-910x1024.jpg'}
    
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
            resolve(products[1]);
        }, 1000 )
    })
}