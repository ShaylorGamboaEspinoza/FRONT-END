const header =() => {
    const header=document.querySelector('.header');
    const headernav=document.querySelector('.header-nav');

    window.addEventListener('scroll', ()=> {
        header.classList.toggle ('header--scroll', scrolly>0);
        headernav.classList.toggle ('header-nav--scroll', scrolly>0);
    })

}
export default header;
