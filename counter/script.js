var count = 0;

function changeCount(num){
    if (count === 0){
        count += num;
        document.getElementById("count").innerHTML = count;
    } else if (count > 0){
        count += num;
        document.getElementById("count").innerHTML = count;
    } else if (count < 0){
        alert("omaş");
    }
    
}

