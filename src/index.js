spinner.render();
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
    spinner.handleClear();
    render();
 }).catch(e=>{
    error.render();
    spinner.handleClear();
})
    