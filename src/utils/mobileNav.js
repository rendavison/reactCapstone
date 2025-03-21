//Modified tutorial from W3Schools
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
export function openNav() {
    document.getElementById("sideNav").classList.add('show');
}

export function closeNav() {
    document.getElementById("sideNav").classList.remove('show');
}