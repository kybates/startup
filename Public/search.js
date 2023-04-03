function search_recipe() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('recipe-title');
    let y = document.getElementsByClassName('recipe-card');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display="none";
        }
        else {
            y[i].style.display="grid";                 
        }
    }
}