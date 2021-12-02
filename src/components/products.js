const products = [  
    {id:1, name: 'Coso uno', price: '50 uds', category: 'celular', img: 'https://servicios.zonatecno.com.uy/productos/Celular_Xiaomi_Redmi_Note_10s_128GB_6GB_Onyx_Gray_DS_tab_1.png'},
    {id:2, name: 'Coso dos', price: '50 uds', category: 'celular',  img: 'https://servicios.zonatecno.com.uy/productos/Celular_Xiaomi_Redmi_Note_10s_128GB_6GB_Onyx_Gray_DS_tab_1.png'},
    {id:3, name: 'Coso tres', price: '50 uds', category: 'celular',  img: 'https://servicios.zonatecno.com.uy/productos/Celular_Xiaomi_Redmi_Note_10s_128GB_6GB_Onyx_Gray_DS_tab_1.png'},
    {id:4, name: 'Coso cuatro', price: '50 uds', category: 'celular',  img: 'https://servicios.zonatecno.com.uy/productos/Celular_Xiaomi_Redmi_Note_10s_128GB_6GB_Onyx_Gray_DS_tab_1.png'}
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000 )
    })
}