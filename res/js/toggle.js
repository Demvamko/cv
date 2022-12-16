let toggles = document.getElementsByClassName('toggle');

for(let toggle of toggles){
    toggle.onclick = () => {
        let elem = document.getElementById(toggle.dataset.for);
     
        if(!elem.style.display)
            elem.style.display = 'none'

        if(elem.style.display == 'none'){
            Open(elem)
            toggle.innerHTML = toggle.dataset.hideText || "Hide Code"
        }
        else{
            Close(elem)
            toggle.innerHTML = toggle.dataset.showText || "Show Code"
        }
    }
}

function Close(elem){
    elem.style.display = 'none'
}

function Open(elem){
    elem.style.display = 'flex'
}