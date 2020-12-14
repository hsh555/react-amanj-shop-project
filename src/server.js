const mockApi = [
    {
        id: 1,
        name: 'product 1',
        price: 1000,
        hasOff: true
    },
    {
        id: 2,
        name: 'product 2',
        price: 2700,
        hasOff: false
    },
    {
        id: 3,
        name: 'product 3',
        price: 9750,
        hasOff: true
    },
    {
        id: 4,
        name: 'product 4',
        price: 2514,
        hasOff: true
    },
    {
        id: 5,
        name: 'product 5',
        price: 1870,
        hasOff: false
    }
];

const getProductsFromMockApi = () =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => resolve(mockApi), 3000)
    );

export default getProductsFromMockApi;