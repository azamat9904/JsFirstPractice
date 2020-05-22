function render(){
    const productsStore = localStorageUtil.getProducts();
    header.render(productsStore.length);
    products.render();
}
let CATALOG = [];

fetch('src/Server/catalog.json')
.then(result =>result.json())
.then(body =>{
    CATALOG = body;
    render();
 }).catch(error =>{
    console.log(error);
})
    