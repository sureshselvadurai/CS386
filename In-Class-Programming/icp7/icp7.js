function main() {
    // Quarterly sales data for each year
    sales = ['2031, 3412, 2512, 4421', '1984, 4154, 2893, 3189', '2152, 4267, 5221, 4742'];

    // Years for which sales data is available
    year = [2016, 2017, 2018];

    for (let i = 0; i < sales.length; i++) {

        // Calculate and display sales for each year
//         console.log("Quarterly sales for the year "+`${year[i]}`+" = "+`${sales[i]}` )

        // Calculate and display total sales for each year
        console.log("Total Sales for " + `${year[i]}` + " = $" + `${fYearlyTotals(sales, i)}`);
    }
}

function fYearlyTotals(arr, ind) {
    let annualTotal = 0;
    let quarterlySales = arr[ind];
    quarterlySales = quarterlySales.split(",");

    // Calculate the annual total sales for a given year
    for (let sale of quarterlySales) {
        annualTotal += +sale;
    }

    return annualTotal;
}

// Call the main function to start the calculation
main();
