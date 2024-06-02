
var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}
];

function storeAnalysis(store){
    console.log("names and ratings of all products:");
    store.forEach((element)=>{
        console.log(`Name: ${element.name}, Rating: ${element.rating}`);
    });
    let totalrating = store.reduce((sum,element)=>sum+element.rating,0);
    let averagerate=totalrating / store.length;
    console.log(`Average Rating: ${averagerate.toFixed(2)}`)

    let minPrice = store.reduce((minProduct, element)=>{
        return element.price<minProduct.price ? element:minProduct;
    })
    console.log(`Product with Minimum Price: &{minprice.name}`);
}
storeAnalysis(store)
