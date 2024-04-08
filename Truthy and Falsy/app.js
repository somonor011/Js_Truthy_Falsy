// truthy and falsy

const a = "Hello"; 

if (a){
    console.log("This is truthy"); // វាជា truthy ពីព្រោះអោយតែ a មានតម្លៃគឺវាចេញ truthy
} else {
    console.log("This is Falsy"); 
}

// បើ a = " " or a = 0 or a = null or a = undefined វានិងចេញ falsy
// អោយតែ a មានតម្លៃ ជា String ក៏ដោយ ជា Number ក៏ដោយវានិងចេញ truthy