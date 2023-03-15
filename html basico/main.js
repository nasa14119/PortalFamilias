const profile = document.querySelector("#clicable_icon"); 
const menu = document.querySelector(".more_info")
profile.onclick =  ()=> {
    if (profile.dataset.open === "true"){
        profile.setAttribute("data-open", "false")
        menu.style.transform = "translateX(0)"
        menu.style.opacity= "1"
    }else {
        console.log(profile.open)
        profile.setAttribute("data-open", "true")
        menu.style.transform = "translateX(100%)"
        menu.style.opacity = "0"
    }

}