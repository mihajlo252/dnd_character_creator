function generate(min, max) {
    // document.getElementById("error_gen").innerHTML = "";
    return Math.floor(Math.random() * (max - min)) + 1;
}
let selected_num;
function choose(n) {
    var num_one = document.getElementById("random_num_one").value;
    var num_two = document.getElementById("random_num_two").value;
    var num_three = document.getElementById("random_num_three").value;

    switch (n) {
        case 1:
            if (num_one == "") {
                document.getElementById("error_gen").innerHTML = "*Please throw the dice!";
                break;
            } else {
                selected_num = num_one;
                document.getElementById("random_num_one").value = "";

                break;
            }
        case 2:
            if (num_two == "") {
                document.getElementById("error_gen").innerHTML = "*Please throw the dice!";
                break;
            } else {
                selected_num = num_two;
                document.getElementById("random_num_two").value = "";
                break;
            }
        case 3:
            if (num_three == "") {
                document.getElementById("error_gen").innerHTML = "*Please throw the dice!";
                break;
            } else {
                selected_num = num_three;
                document.getElementById("random_num_three").value = "";
                break;
            }
    }
}
function assign(n) {
    switch (n) {
        case 1:
            document.getElementById("strength").value = selected_num;
            selected_num = "";
            if (document.getElementById("strength").value != "") {
                document.getElementById("strength_assign").disabled = true;
                document.getElementById("strength_assign").style.opacity = "0";
                document.getElementById("str_label").style.display = "inline-block";
            }
            break;
        case 2:
            document.getElementById("agility").value = selected_num;
            selected_num = "";
            if (document.getElementById("agility").value != "") {
                document.getElementById("agility_assign").disabled = true;
                document.getElementById("agility_assign").style.opacity = "0";
                document.getElementById("agi_label").style.display = "inline-block";
            }
            break;
        case 3:
            document.getElementById("intellect").value = selected_num;
            selected_num = "";
            if (document.getElementById("intellect").value != "") {
                document.getElementById("intellect_assign").disabled = true;
                document.getElementById("intellect_assign").style.opacity = "0";
                document.getElementById("int_label").style.display = "inline-block";
            }
            break;
    }
}

function reset_assign() {
    document.getElementById("strength_assign").disabled = false;
    document.getElementById("agility_assign").disabled = false;
    document.getElementById("intellect_assign").disabled = false;

    document.getElementById("strength_assign").style.opacity = "1";

    document.getElementById("agility_assign").style.opacity = "1";

    document.getElementById("intellect_assign").style.opacity = "1";

    document.getElementById("strength").value = "";
    document.getElementById("agility").value = "";
    document.getElementById("intellect").value = "";

    document.getElementById("str_label").style.display = "none";
    document.getElementById("agi_label").style.display = "none";
    document.getElementById("int_label").style.display = "none";
}
