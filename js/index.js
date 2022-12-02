
console.dir(document);

const productDetail = document.querySelector('.product__detail');
const modalProduct = document.querySelector('.modal_product');

productDetail.addEventListener('click', () => {
    // console.log('click ' + productDetail.textContent)
    modalProduct.classList.add('modal_open');
})

modalProduct.addEventListener('click', () => {
    // console.log('click');
    modalProduct.classList.remove('modal_open');
})
