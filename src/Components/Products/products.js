class Products{
    constructor(){
        this.classNameActive = 'product-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }
    handleSetLocationStorage(element,id){
        const result = localStorageUtil.putProducts(id);
        if(result.pushProducts){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }else{
              element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG.forEach(({id,name,price,img}) =>{
            let activeClass = '';
            let activeText = '';
            if(productsStore.indexOf(id) === -1){
                activeText = this.labelAdd;
            }else{
                activeText = this.labelRemove
                activeClass = ' ' + this.classNameActive;
            }
            htmlCatalog += `
            <li class = "product-element">
                <span class = "product-element__name">${name}</span>
                <img  class = "product-element__img" src = "${img}"/>
                <span class = "product-element__price">⚡️ ${price.toLocaleString()} USD</span>
                <button class = "product-element__btn${activeClass}" onclick = "products.handleSetLocationStorage(this,'${id}');">${activeText}
                </button>
            </li>
            `;
        });
        const html = `
            <ul class = "product-container">
                ${htmlCatalog} 
            </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}
const products = new Products();
products.render();