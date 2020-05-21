class Products{
    render(){
        let htmlCatalog = '';
        CATALOG.forEach(({id,name,price,img}) =>{
            htmlCatalog += `
            <li class = "product-element">
                <span class = "product-element__name">${name}</span>
                <img  class = "product-element__img" src = "${img}"/>
                <span class = "product-element__price">⚡️ ${price.toLocaleString()} USD</span>
                <button class = "product-element__btn">Добавить в корзину</button>
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