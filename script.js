class Trip {
    constructor(tripID, city, duration, type, airline, visa, cost){
        this.tripID = tripID;
        this.city = city;
        this.duration = duration;
        this.type = type;
        this.airline = airline;
        this.visa = visa;
        this.cost = cost;
    }

    
    showInfo() {
        console.log('--------------------------');
        console.log(`ID: ${this.tripID}`);
        console.log(`City: ${this.city}`);
        console.log(`Duration: ${this.duration}`);
        console.log(`Type: ${this.type}`);
        console.log(`Type: ${this.airline}`);
        console.log(`Type: ${this.visa}`);
        console.log(`Cost: ${this.cost}`);
        console.log('--------------------------');
    }
    }



function addTrip(){
    let tripID = document.getElementById("trip-ID").value;
    let city = document.getElementById("city").value;
    let duration = document.getElementById("duration").value;
    let type = document.getElementById("type").value;
    let airline = document.getElementById("airline").value;
    let visa = document.getElementById("visa").value;
    let cost = parseFloat(document.getElementById("cost").value);
  

    // create new object
    let newTrip = new Trip(tripID, city, duration, type, airline, visa, cost);

    // add new object to array
    tripArray.push(newTrip);
    
    alert("Trip is added successfully!");
    console.log(tripArray);

    updateTripTable(tripArray);
}

function searchTrip(){
   
    let searchID =  document.getElementById("search-value").value

    for (let i in tripArray){
        let trip = tripArray[i];
        if (trip.tripID == searchID){
            trip.showInfo();
            alert(`City: ${trip.city}, trip type: ${trip.type}, duration: ${trip.duration}`);
        }
    }
}

function deleteTrip(){
    let searchID = document.getElementById("search-value").value;

    for (let i in tripArray){
        let trip =  tripArray[i];
        if (trip.tripID == searchID){
            break;
        
        }
    }
}

function updateTrip(){
    let tripID = document.getElementById("trip-id").value;
    let city = document.getElementById("city").value;
    let duration = document.getElementById("duration").value;
    let type = document.getElementById("type").value;
    let airline = document.getElementById("airline").value;
    let visa = document.getElementById("visa").value;
    let cost = parseFloat(document.getElementById("cost").value);

    let newTrip = new Trip(tripID, city, duration, type, airline, visa, cost);

    tripArray.push(newTrip);
    
    alert("Trip is updated successfully!");
    console.log(tripArray);

    updateTripTable(tripArray);

}
// update table based on data array
function updateTripTable(data){
let tableElem = document.getElementById("trip-table");
tableElem.remove();


// create new table again
let newTableElem = document.createElement("table");

// set id for new table
newTableElem.setAttribute("trip-ID", "trip-table");

// create heading row
let newRowElem = document.createElement("td");
let heading1 = document.createElement("th");
let heading2 = document.createElement("th");
let heading3 = document.createElement("th");
let heading4 = document.createElement("th");
let heading5 = document.createElement("th");
let heading6 = document.createElement("th");
let heading7 = document.createElement("th");

heading1.innerText = "ID";
heading2.innerText = "city";
heading3.innerText = "duration";
heading4.innerText = "type";
heading5.innerText = "airline";
heading6.innerText = "visa";
heading7.innerText = "cost";


newRowElem.appendChild(heading1);
newRowElem.appendChild(heading2);
newRowElem.appendChild(heading3);
newRowElem.appendChild(heading4);
newRowElem.appendChild(heading5);
newRowElem.appendChild(heading6);
newRowElem.appendChild(heading7);


// add row to table
newTableElem.appendChild(newRowElem);

// add data row
for (let i in data){
    let trip = data[i];
    newRowElem = document.createElement("tr");
    let info1 = document.createElement("td");
    let info2 = document.createElement("td");
    let info3 = document.createElement("td");
    let info4 = document.createElement("td");
    let info5 = document.createElement("td");
    let info6 = document.createElement("td");
    let info7 = document.createElement("td");
    
    
    info1.innerText = i;
    info2.innerText = trip.tripID;
    info2.innerText = trip.city;
    info3.innerText = trip.duration;
    info4.innerText = trip.type;
    info5.innerText = trip.airline;
    info6.innerText = trip.visa;
    info7.innerText = trip.cost;
   

    newRowElem.appendChild(info1);
    newRowElem.appendChild(info2);
    newRowElem.appendChild(info3);
    newRowElem.appendChild(info4);
    newRowElem.appendChild(info5);
    newRowElem.appendChild(info6);
    newRowElem.appendChild(info7);
}
    // append row to table

    newTableElem.appendChild(newRowElem);


document.body.appendChild(newTableElem);
}


let tripArray =  [];
