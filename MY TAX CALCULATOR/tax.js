document.getElementById("taxform").addEventListener('submit', function (event) {
    event.preventDefault();

    let basic_salary = Number(document.getElementById("basic_salary").value);
    let benefits = Number(document.getElementById("benefits").value);

    // GROSS SALARY
    function calculate_gross(basic, benefits) {
        return basic + benefits;
    }

    let gross_salary = calculate_gross(basic_salary, benefits);
    document.getElementById("gross").innerHTML = gross_salary;

    // NHIF
    function calculate_nhif(gross) {
        let nhif_value;

        if (gross > 100000) {
            nhif_value = 1700;
        }
        else if (gross > 90000) {
            nhif_value = 1600;
        }
        else if (gross > 80000) {
            nhif_value = 1500;
        }
        else if (gross > 70000) {
            nhif_value = 1400;
        }
        else if (gross > 60000) {
            nhif_value = 1300;
        }
        else if (gross > 50000) {
            nhif_value = 1200;
        }
        else if (gross > 45000) {
            nhif_value = 1100;
        }
        else if (gross > 40000) {
            nhif_value = 1000;
        }
        else if (gross > 35000) {
            nhif_value = 950;
        }
        else if (gross > 30000) {
            nhif_value = 900;
        }
        else if (gross > 25000) {
            nhif_value = 850;
        }
        else if (gross > 20000) {
            nhif_value = 750;
        }
        else if (gross > 15000) {
            nhif_value = 600;
        }
        else if (gross > 12000) {
            nhif_value = 500;
        }
        else if (gross > 8000) {
            nhif_value = 400;
        }
        else if (gross > 6000) {
            nhif_value = 300;
        }
        else {
            nhif_value = 150;
        }

        return nhif_value;
    }

    let nhif = calculate_nhif(gross_salary);
    document.getElementById("nhif").innerHTML = nhif;

    // NSSF
    function calculate_nssf(gross) {
        if (gross < 18000) {
            return 0;
        }
        return gross * 0.06;
    }

    let nssf = calculate_nssf(gross_salary);
    document.getElementById("nssf").innerHTML = nssf.toFixed(2);

    // NHDF
    function calculate_nhdf(gross) {
        return gross * 0.015;
    }

    let nhdf = calculate_nhdf(gross_salary);
    document.getElementById("nhdf").innerHTML = nhdf.toFixed(2);

    // TAXABLE INCOME
    function calculate_taxable_income(gross, nhif, nhdf, nssf) {
        return gross - (nhif + nhdf + nssf);
    }

    let taxable_income = calculate_taxable_income(
        gross_salary,
        nhif,
        nhdf,
        nssf
    );

    document.getElementById("taxable").innerHTML = taxable_income.toFixed(2);

    // PAYE
    function calculate_payee(taxable) {
        let payee = 0;

        if (taxable <= 24000) {
            payee = taxable * 0.10;
        } else if (taxable <= 32333) {
            payee = (24000 * 0.10) +
                ((taxable - 24000) * 0.25);
        } else {
            payee = (24000 * 0.10) +
                (8333 * 0.25) +
                ((taxable - 32333) * 0.30);
        }

        return payee;
    }

    let payee = calculate_payee(taxable_income);
    document.getElementById("payee").innerHTML = payee.toFixed(2);

    // NET SALARY
    function calculate_net_salary(gross, nhif, nhdf, nssf, payee) {
        return gross - (nhif + nhdf + nssf + payee);
    }

    let net_salary = calculate_net_salary(
        gross_salary,
        nhif,
        nhdf,
        nssf,
        payee
    );

    document.getElementById("net").innerHTML = net_salary.toFixed(2);
});
