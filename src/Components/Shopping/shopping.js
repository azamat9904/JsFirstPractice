class Shopping{
    hundleClear(){
        ROOT_SHOPPING.innerHTML = '';
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        
        CATALOG.forEach(({id,name,price}) =>{
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr class = "shopping-element">
                        <td class = "shopping-element__name">⚡️ ${name}</td>
                        <td class = "shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });
        const html = `
            <div class = "shopping-container">
                <table>
                    <div class = "shopping__close" onclick = "shopping.hundleClear();"> <div>
                    ${htmlCatalog}
                     <tr class = "shopping-element">
                        <td class = "shopping-element__name">💥 Сумма</td>
                        <td class = "shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}
const shopping = new Shopping();
