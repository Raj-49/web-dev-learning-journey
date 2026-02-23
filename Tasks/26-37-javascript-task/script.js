console.log("Hello JavaScript!");
document.getElementById("demo").innerHTML = "Hello World!  from JavaScript";

changeText = () => {
    document.getElementById("demo-change").innerHTML = "The text has been changed!";
}

showComments = () => {
    document.getElementById("comments").style.display = "block";
}

hideComments = () => {
    document.getElementById("comments").style.display = "none";
}

// Creating 7 obbjects of different products we can buy online

// Product 1
const product1 = {
    name: "ASUS ROG 5s (Phantom Black, 256 GB) (12 GB RAM)",
    category: "Mobiles & Accessories > Mobiles > ASUS Mobiles",
    image : true,
    imageurl: "https://m.media-amazon.com/images/I/71fXcX5dDSL._SL1500_.jpg",
    rating: 3.9,
    reviews: 1048,  
    price: 63999,
    color: "Phantom Black",
    storage: "256 GB",
    ram: "12 GB",
    battery: "6000 mAh",
    processor: "Qualcomm Snapdragon 888 Plus (SM8350)",
    camera: {
        rear: "64MP + 13MP + 5MP",
        front: "24MP"
    },
    discountOffers: true,
    warranty: "1 Year Brand Warranty",
    bankOffers: true,
    seller: "Wizrob Fashion",
    available: false,
    emiperMonth: 2251,
};

// Product 2
// Yoyo Spinstar – Beginner Responsive Yoyo from YoyoFactory with Carrying Case – Perfect for Kids and Adults Learning to Yoyo
const product2 = {
    name: "Yoyo Spinstar – Beginner Responsive Yoyo ",
    category: "Toys & Games > Toys > Yo-Yos",
    image : true,
    imageurl: "https://m.media-amazon.com/images/I/61b+g4kG7DL._SL1500_.jpg",
    rating: 4.3,
    reviews: 256,  
    price: 499,
    color: "red",
    material: "Plastic",
    weight: "60 grams",
    diameter: "55 mm",
    responsiveness: "Responsive",
    bearingType: "C size",
    stringIncluded: true,
    carryingCase: true,
    suitableForAges: "8 years and up",
    brand: "YoyoFactory",
    available: true,
    madein  : "China",
    designer: "YoyoFactory Design Team",
}

//Product 3
const product3 = {
    name: "Nu Republic Cyberstud Fidget Spinner Earbuds Bluetooth Wireless in Ear with X-Bass", 
    category: "Electronics > Accessories & Supplies > Headphones",
    image : true,
    imageurl: "https://m.media-amazon.com/images/I/61jKX+1gGDL._SL1500_.jpg",
    rating: 3.8,
    reviews: 34,  
    price: 2499,
    color: "Red/Grey",
    earPlacement: "In Ear",
    formFactor: "In Ear",
    noiseControl: "Environmental Noise Cancellation",
    batteryLife: "70 Hrs Playtime",
    driverSize: "13mm Dynamic Drivers",
    fastCharge: true,
    dualMode: "Game/Music",
    warranty: "6 Month Warranty",
    available: true,
    madein  : "China",
    brand: "Nu Republic",
}   

// Product 4
const product4 = {
    name: "ASUS ROG Strix SCAR 16,Intel Core Ultra 9 275HX Gaming Laptop",
    category: "Computers & Accessories > Laptops",
    image : true,
    imageurl: "https://m.media-amazon.com/images/I/91g6b0bXJDL._SL1500_.jpg",
    rating: 3.8,    
    reviews: 9,  
    price: 449990,
    color: "Off Black",
    screenSize: "16 Inches",
    hardDiskSize: "2 TB",
    cpuModel: "Intel Core Ultra 9",
    ramMemory: "32 GB",
    operatingSystem: "Windows 11 Home",
    specialFeatures: [
        "1080P FHD IR Camera for Windows Hello",
        "Anti-glare display",
        "ROG Nebula HDR Display",
        "ROG intelligent cooling"
    ],
    graphicsCard: "Dedicated",
    warranty: "1 Year Warranty",
    available: true,
    madein  : "China",
    brand: "ASUS",

}

// Product 5
const product5 = {
    name: "Tedco Precision Gyroscope",
    category: "Toys & Games > Toys > Educational Toys",
    image : true,
    imageurl: "https://m.media-amazon.com/images/I/71j1b0bXJDL._SL1500_.jpg",
    rating: 4.0,
    reviews: 436,  
    price: 2946.09,
    color: "Green, Black",
    material: "Plastic",
    dimensions: "7.62 x 7.62 x 15.24 cm",
    weight: "108.86 g",
    assemblyRequired: false,
    batteriesRequired: false,
    recommendedAge: "8 years and up",
    manufacturer: "Tedco",
    available: true,
    madein  : "USA",
    brand: "Tedco",

}


// Product 6
const product6 = {
    name: "Green Soul Ghost RGB (2026 Edition) Gaming Chair",
    category: "Computers & Accessories > Computer Accessories & Peripherals > Computer Chairs",
    image : true,
    imageurl: "https://m.media-amazon.com/images/I/61b+g4kG7DL._SL1500_.jpg",
    rating: 4.6,
    reviews: 669,
    price: 16990,
    color: "Black",
    material: "Leatherette",
    dimensions: "53D x 74W x 124H Centimeters",
    weight: "18 Kilograms",
    backStyle: "High Back",
    frameMaterial: "Metal",
    specialFeatures: [
        "Adjustable Height",
        "Arm Rest",
        "Ergonomic",
        "Foot Rest",
        "Upholstered Leather"
    ],
    warranty: "3 Year Warranty",
    available: true,
    madein  : "India",
    brand: "Green Soul",
}

//Product 7
const product7 = {
    name: "BAMBU LAB P2S 3D PRINTER | 256 x 256 x 256 mm³",
    category: "3D Printers",
    image : true,
    imageurl: "https://m.media-amazon.com/images/I/61V6pF6bWDL._SL1500_.jpg",
    rating: 4.9,
    reviews: 150,  
    price: 70000,
    buildVolume: "256 x 256 x 256 mm³",
    printingTechnology: "Fused Deposition Modeling",
    maxNozzleTemperature: "300 °C",
    filamentDiameter: "1.75 mm",
    maxHeatbedTemperature: "110 °C",
    maxSpeedOfToolhead: "600 mm/s",
    camera: "Built-in; 1920*1080; 30 fps HD",
    touchscreen: "5-inch 854*480 Touchscreen",
    networkControl: "Dual-Band Wi-Fi",
    brand: "Bambu Lab",
    available: true,
    madein  : "China",
    OffscreenCanvas: true,
    offers : "Fast Shipping, Secure Payment, Tracking Updates, Best Prices, Chat Support"
}


displayObject = () => {
    let text = "";
    // Code to display products on a webpage can be added here
    for(let [key, value] of Object.entries(product2)) {
        text += key + ": " + value + "<br>";
    }
    document.getElementById("objectOutput").innerHTML = text;
    document.getElementById("obj1hide").style.display = "block";
}

hideObject = () => {
    document.getElementById("objectOutput").innerHTML = "";
    document.getElementById("obj1hide").style.display = "none";
}

createCustomObject = () => {
    const customobject = {};
    customobject.firstname = document.getElementById("firstName").value;
    customobject.lastname = document.getElementById("lastName").value;
    customobject.phoneno = document.getElementById("phoneNo").value;
    customobject.age = document.getElementById("age").value;
    customobject.gender = document.getElementById("gender").value;
    customobject.profession = document.getElementById("profession").value;
    let text = "";
    // Code to display products on a webpage can be added here
    for(let [key, value] of Object.entries(customobject)) {
        text += key + ": " + value + "<br>";
    }
    document.getElementById("customObjectOutput").innerHTML = text;
    document.getElementById("customObjectRecreate").style.display = "block";
}

recreateCustomObject = () => {
    document.getElementById("customObjectOutput").innerHTML = "";
    document.getElementById("customObjectRecreate").style.display = "none";
}


console.log("Product Details:");
console.log("----------------");
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);
console.log(product6);
console.log(product7);

// Program 1: Number Greater Than 10
program1 = () => {
    const num = document.getElementById("prog1Input").value;
    const output = num > 10 ? "Greater than 10" : "10 or less";
    document.getElementById("prog1Output").innerHTML = output;
}

// Program 2: Even or Odd
program2 = () => {
    const num = document.getElementById("prog2Input").value;
    const output = num % 2 === 0 ? "Even" : "Odd";
    document.getElementById("prog2Output").innerHTML = output;
}

// Program 3: Positive, Negative, or Zero
program3 = () => {
    const num = document.getElementById("prog3Input").value;
    let output;
    if (num > 0) output = "Positive";
    else if (num < 0) output = "Negative";
    else output = "Zero";
    document.getElementById("prog3Output").innerHTML = output;
}

// Program 4: Password Verification
program4 = () => {
    const password = document.getElementById("prog4Input").value;
    const output = password === "admin123" ? "Login successful" : "Incorrect password";
    document.getElementById("prog4Output").innerHTML = output;
}

// Program 5: Student Grade
program5 = () => {
    const score = document.getElementById("prog5Input").value;
    let grade;
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else grade = "F";
    document.getElementById("prog5Output").innerHTML = "Grade: " + grade;
}

// Program 6: Voting Eligibility
// Arrow function (your code)
program6 = () => {
    const age = document.getElementById("prog6Input").value;
    const output = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
    document.getElementById("prog6Output").innerHTML = output;
}

// Regular function
function sum(a, b) {
    return a + b;
}

// Program 7: Larger Number
program7 = () => {
    const num1 = parseFloat(document.getElementById("prog7Input1").value);
    const num2 = parseFloat(document.getElementById("prog7Input2").value);
    let output;
    if (num1 > num2) output = "First number is larger: " + num1;
    else if (num2 > num1) output = "Second number is larger: " + num2;
    else output = "Both numbers are equal";
    document.getElementById("prog7Output").innerHTML = output;
}

// Program 8: Leap Year
program8 = () => {
    const year = document.getElementById("prog8Input").value;
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const output = isLeap ? year + " is a leap year" : year + " is not a leap year";
    document.getElementById("prog8Output").innerHTML = output;
}

// Program 9: Vowel or Consonant
program9 = () => {
    const char = document.getElementById("prog9Input").value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const output = vowels.includes(char) ? "Vowel" : "Consonant";
    document.getElementById("prog9Output").innerHTML = output;
}

// Program 10: Discount Calculator
program10 = () => {
    const bill = parseFloat(document.getElementById("prog10Input").value);
    const discount = bill > 100 ? bill * 0.1 : 0;
    const finalAmount = bill - discount;
    document.getElementById("prog10Output").innerHTML = "Discount: $" + discount.toFixed(2) + " | Final Amount: $" + finalAmount.toFixed(2);
}

// Program 11: Print statements using for loop
program11 = () => {
    const times = parseInt(document.getElementById("prog11Input").value);
    let output = "";

    for(let i = 1; i <= times; i++) {
        output += "This is statement number " + i + "<br>";
    }

    document.getElementById("prog11Output").innerHTML = output;
}

// let text = "";
// for(let i=1; i<=20; i++) {
//     text += "This is statement number " + i + "<br>";
// }
// document.getElementById("prog11Output").innerHTML = text;

runPromiseDemo = async () => {
    const outputDiv = document.getElementById("demopromiseoutput");
    outputDiv.innerHTML = "Starting Promise Demo...<br>";   
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    outputDiv.innerHTML += "Waiting for 5 seconds...<br>";
    await delay(5000);
    outputDiv.innerHTML += "5 seconds passed!<br>";
    outputDiv.innerHTML += "Waiting for another 10 seconds...<br>";
    await delay(10000);
    outputDiv.innerHTML += "10 more seconds passed! Promise Demo Completed. <br>";
    await delay(2000);
    outputDiv.innerHTML += "Reseting demo...<br>   ";
    await delay(2000);
    outputDiv.innerHTML = "";
}

const autoScrollToBottom = () => {
    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
};

const observeContentChanges = () => {
    const observer = new MutationObserver(() => {
        autoScrollToBottom();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
};

document.addEventListener('DOMContentLoaded', observeContentChanges);

// End of script.js