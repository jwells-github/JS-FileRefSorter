function filter(){
    var input =  document.getElementById("filter-input").value
    var regex = /\d{4}([a-z]|[A-Z]){3}\d{3}(\A|a?)/g;
    var matches = input.match(regex);
    // Sort by Year, then Month, then file number
    matches.sort(function(a,b){
        var valueA =  (parseInt(a.substring(0,2),10) * 1000) + (parseInt(a.substring(2,4),10) * 10000) + parseInt(a.substring(7,10),10)
        var valueB =  (parseInt(b.substring(0,2),10) * 1000) + (parseInt(b.substring(2,4),10) * 10000) + parseInt(b.substring(7,10),10)
        return valueA - valueB
    })
    document.getElementById("filter-output").value = matches.join('\n')
}


function amalgamate(){
    var input =  document.getElementById("amalgamate-input").value
    var charges = input.split("\n")
    charges = charges.filter(charge => charge.length > 11)
    
    
    charges.sort(function(a,b){
        var valueA =  (parseInt(a.substring(0,2),10) * 1000) + (parseInt(a.substring(2,4),10) * 10000) + parseInt(a.substring(7,10),10)
        var valueB =  (parseInt(b.substring(0,2),10) * 1000) + (parseInt(b.substring(2,4),10) * 10000) + parseInt(b.substring(7,10),10)
        return valueA - valueB
    })
    
    
    var regex = /\d+\.*\d+/g;
    var combinedCharges = []
    var i = 0;
    while (i < charges.length) {
        var matches = charges[i].substring(11).match(regex)
        var fileRef = charges[i].substring(0,11).toUpperCase()
        var counter = i +1;
        if (counter >= charges.length){
            break
        }
        while(true){
            if(charges[counter].substring(0,11).toUpperCase() != fileRef){
                break
            }
            matches = matches.concat((charges[counter].substring(10).match(regex)))
            console.log(matches.join("\t"));
            counter++
            if (counter >= charges.length){
                break
            }
        }
        
        combinedCharges.push(fileRef + "\t" + matches.join("\t"))
        i = counter;
        
    }
    
    document.getElementById("amalgamate-output").value = combinedCharges.join("\n")
}