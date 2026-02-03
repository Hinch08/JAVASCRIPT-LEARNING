document.getElementById("taxform").addEventListener('submit',function(event){
    event.preventDefault()

    let basic_salary = Number(document.getElementById("basic_salary").value)
    let benefits = Number(document.getElementById("benefits").value)

    function calculate_gross(basic,benefits){
        return basic + benefits
    }

    let gross_salary = calculate_gross(basic_salary , benefits)
    document.getElementById("gross").innerHTML = gross_salary


    function calculate_nhif(gross){

    }

    let nhif = calculate_nhif(gross_salary)
    document.getElementById("nhif").innerHTML = nhif
} )