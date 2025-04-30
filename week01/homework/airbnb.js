const buttonplus = document.getElementById("plus")
const buttonminus = document.getElementById("minus")

const handleClickplus = function(event){
    const price = document.getElementById("priceofg");
    pricenum = Number(price.textContent.replace(/[\\,]/g, ''));
    //console.log(Number(pricenum));

    let newprice = pricenum + 10000;
    var pricestring = String(newprice);
    price.textContent = "\\" + pricestring;
}

const handleClickminus = function(event){
    const price = document.getElementById("priceofg");
    pricenum = Number(price.textContent.replace(/[\\,]/g, ''));
    //console.log(Number(pricenum));

    newprice = pricenum - 10000;
    const pricestring = String(newprice);
    price.textContent = "\\" + pricestring;
    
}

buttonplus.addEventListener('click', handleClickplus);
buttonminus.addEventListener('click', handleClickminus);

