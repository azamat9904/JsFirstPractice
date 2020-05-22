class Spinner{
    handleClear(){
        ROOT_SPINNER.innerHTML = '';
    }
    render(){
        const html = `
            <div class = "spinner-container">
                <img class = "spinner__img" src = "../../../build/img/spinner.svg">
            </div>
        `;
        ROOT_SPINNER.innerHTML = html;
    }
}

const spinner = new Spinner();
spinner.render();