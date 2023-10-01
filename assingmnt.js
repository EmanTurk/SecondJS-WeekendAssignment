// // const carMarket = require("./obj (1)");

//1-Search for a car agency by its name or ID.

const carMarket = require("./obj (1)")

function findagency(info) {
  for (i = 0; i < carMarket.sellers.length; i++) { //iterate over the sellers array to find an agency that matches the name.
    if (
      info == carMarket.sellers[i].agencyId ||
      info == carMarket.sellers[i].agencyName
    ) {
      return carMarket.sellers[i];// chose i here since the array has a lot of objects, and instead to ask him to return, id, name,credit...i ASKED TO RETURN THE PLACE WHERE it's located in the array.
    }
  }
  return; //if an object/info that doesn't exist in the array then it will exist means that it's unidentified.
}


////////////////////////////////////////////////

//2- Retrieve all agencies' names///

const agenciesname = carMarket.sellers.map(function(b){
    return b.agencyName
})

//////////////////////////////////////////////

//3- Add a new car to an agency's inventory///


//okay first target one agency inventory- then add it to the cars array- add details

function addCarToBestDeal(brandName, carName, carYear, carPrice, carNumber, ownerId) {
    const bestDealAgency = carMarket.sellers[0];
    console.log(bestDealAgency);
    console.log(bestDealAgency.cars);

    // targeted the first brand in the list- now find it
    const targetBrand = bestDealAgency.cars.find(car => car.brand.toLowerCase() === brandName.toLowerCase());

    // Check if brand is not found, you may choose to create a new brand or return an error
    if (!targetBrand) {
        console.log('Brand not found, you may choose to create it or return an error');
        return;  // You can handle this case as you prefer
    }

    // the new car here with all the details
    const newCar = {
        name: carName,
        year: carYear,
        price: carPrice,
        carNumber: carNumber,
        ownerId: ownerId
    };

    // Added the new car to the first target brands.
    targetBrand.models.push(newCar);

    console.log('Car added successfully to', brandName);
}

// // okay tried this and it worked
// addCarToBestDeal('bmw', 'X1', 2023, 30000, 'XYZ123', 'Plyq5M5AZ');

//////////////////////////////////////////////

//4- Remove a car from an agency's inventory///

//didn't specify which car, so create a function that can accept any car in the list and remove it
//loop for agency-iterate over it-agency: loop over the array of cars to find where is the car the user wants to remove- car id
//nested loops- long solution but it's good.
// removeCar("AZJZ4", "Best Deal");-this is what I'll try


function removeCar(carId, removeFromAgency) {
    for (let i = 0; i < carMarket.sellers.length; i++) { //created this loop to iterate over agencies. to find where it's located. we check if the agency name is located in the array 
        if (removeFromAgency === carMarket.sellers[i].agencyName) { // if we entered this loop then it means that we found the desired ageegncy then we go into a second loop to find the car itself in the array!
            for (let k = 0; k < carMarket.sellers[i].cars.length; k++) {
                for (let j = 0; j < carMarket.sellers[i].cars[k].models.length; j++) {
                    if (carId === carMarket.sellers[i].cars[k].models[j].carNumber) {
                        carMarket.sellers[i].cars[k].models.splice(j, 1);
                        console.log('Car Removed Successfully');
                        return;
                    }
                }
            }
        }
    }
    // If the function has not returned by this point, print an error message
    console.log('Car Not Found');
}
//******Test here ************/
// removeCar("AZJZ4", "Best Deal");
// console.log(carMarket.sellers[0].cars[0])

//////////////////////////////////////////////

//5- Change the cash or credit of an agency.///
//okay so in this question I have to go over the sellers then find a specific agency(what the user decide cause in the question it's not defined, then change the value of the cash or credit)


function updateAgencyFunds(agencyName, newCash, newCredit) {
    // First of all I have to find the agency that the user chose to chnage the cash or credit values
    const agency = carMarket.sellers.find(seller => seller.agencyName === agencyName);

    // Check if agency is found-if not then it will be undefined
    if (!agency) {
        console.log('Agency not found!');
        return;
    }

    if (newCash != null) {
        agency.cash = newCash;
    }
//here and in the cash we have to make sure it's not a null
    if (newCredit != null) {
        agency.credit = newCredit;
    }
//okay in the conlsoe here I wrote a sentence and included the agancy name  
    // console.log(`Updated funds for ${agencyName}: Cash = ${agency.cash}, Credit = ${agency.credit}`);
}

// Example Usage:
// updateAgencyFunds('Best Deal', 500000, 300000);  ///the user can chnage the value and test

////////////////////////////////////////////////////////////////////////////////////////////
//6- Update the price of a specific car in an agency


function updateCarPrice(agencyName, priceUpdated) {
    const agency = findAgency(agencyName);
    if (!agency) {
        console.log('Agency not found!');
        return;
    }
    
    const findCar = agency.cars.find((car) => {
        return car.brand === priceUpdated.brand && car.models.find((model) => model.carNumber === priceUpdated.model.carNumber);
    });
    
    if (findCar) {
        const findModel = findCar.models.find((model) => model.carNumber === priceUpdated.model.carNumber);
        if (findModel) {
            findModel.price = priceUpdated.model.price;
        }
    }

    return agency;
}

function findAgency(agencyName) {
}
//////////////////////////