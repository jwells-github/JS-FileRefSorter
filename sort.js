function filter(){
    let input =  document.getElementById("input").value
    let regex = /\d{4}([a-z]|[A-Z]){3}\d{3}(\A|a?)/g;
    let matches = input.match(regex);
    // Sort by Year, then Month, then file number
    matches.sort(function(a,b){
        let valueA =  (parseInt(a.substring(0,2),10) * 1000) + (parseInt(a.substring(2,4),10) * 10000) + parseInt(a.substring(7,10),10)
        let valueB =  (parseInt(b.substring(0,2),10) * 1000) + (parseInt(b.substring(2,4),10) * 10000) + parseInt(b.substring(7,10),10)
        return valueA - valueB
    })
    document.getElementById("output").value = matches.join('\n')
}