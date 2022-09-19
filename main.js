
let menuBtn = document.getElementById('menubtn');
let crossBtn = document.getElementById('cancelbtn');

function clicked() {
    menuBtn.style.display = 'none';
    crossBtn.style.display = 'block';
    let list = document.getElementById('link');
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.position = ' none';
    list.style.marginTop = '40px';
    list.style.marginLeft = '-307px';
    list.style.lineHeight = '68px';

}

function unclicked() {
    menuBtn.style.display = 'block';
    crossBtn.style.display = 'none';
    let list = document.getElementById('link');
    list.style.display = 'none';

    function autorefresh(t) {
        setTimeout("location.reload(true);", t);
    }
    autorefresh(10);
}


menuBtn.addEventListener('click', clicked);
crossBtn.addEventListener('click', unclicked);




