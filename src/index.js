function render(){
    const productsStore = localStorageUtil.getProducts();
    header.render(productsStore.length);
    products.render();
}
spinner.render();

let CATALOG = [];

fetch('src/Server/catalog.json')
.then(result =>result.json())
.then(body =>{
    CATALOG = body;
    setTimeout(function(){
        spinner.handleClear();
        render();
    },1000);
 }).catch(error =>{
    console.log(error);
})
    