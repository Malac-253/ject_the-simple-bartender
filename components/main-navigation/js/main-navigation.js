
function accordion_meun() {  
    const acc = document.getElementsByClassName("prim-nav-list-item"); // Getting nav list item
    // add an event lister to expand the dropdown
    for (var i = 0; i < acc.length; i++) {
        let curr = i //held as an in-event varable
        acc[curr].querySelector('.prim-nav-btn').addEventListener("click", function() {
            // Close all dropdown, any others that where open
            close_all_dropdown(acc[curr])
            //Open the selected dropdown
            this.classList.add("nav-active");
            this.querySelector('.btn-detail').classList.add("no-hover");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = (panel.scrollHeight*1.2) + "px";
            } 
      });
    }

}
accordion_meun()


function meunicon_activation(html_node) {
    close_all_dropdown(html_node) // Close all dropdown, any that where open
    html_node.querySelector('.prim-nav-meun .meun-icon-box').classList.toggle("bar-change"); //add bar animate class
    html_node.querySelector('.prim-nav-actual .prim-nav-list').classList.toggle("nav-change"); //add meunnav animate class 
}

function close_all_dropdown (curr_html_node) {
    // Close all dropdown, any others that where open, any others that where open
    var items = document.querySelector('.prim-nav-list').getElementsByClassName('prim-nav-list-item')
    for (let i = 0; i < items.length; i++) {
        items[i].style.marginTop = null;
        // removes no-hover the prevents button details when meundropdown
        items[i].querySelector('.prim-nav-btn').querySelector('.btn-detail').classList.remove('no-hover')
        // removes nav-ative, the special hover/active class for selected buttons (when :active :hover)
        items[i].querySelector('.prim-nav-btn').classList.remove('nav-active')
        // Close all dropdowns not part of curr node
        if(!items[i].isEqualNode(curr_html_node)){
            items[i].querySelector('.prim-nav-sub-list').style.maxHeight = null; 
        }
    }
}