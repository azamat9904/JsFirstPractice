class Header{
    handlerOpenShoppingPage(){
       shopping.render();
    }
    render(count){
        const html = `
          <div class = "header-container">  
                <div class = "header-counter" onclick="header.handlerOpenShoppingPage();">🔥 ${count}</div>
          </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}
const header = new Header();

