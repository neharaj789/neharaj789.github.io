document.getElementById("show_diet_button").click();
function show_diet() {

    const temp = document.getElementsByClassName('all_diet');

    for (let i = 0; i < temp.length; i++) {
        temp[i].style.display = "none";
    }

    const age_group = document.getElementById('age_group').value;
    let age_class = document.getElementsByClassName(age_group);
    const diet_type = document.getElementById('diet_type').value;
   
    if(diet_type == 'veg'){
        age_class[0].style.display = "block" ;
    }
    else{
        age_class[1].style.display = "block";

    }
}
