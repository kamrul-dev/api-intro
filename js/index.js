// Javascript Object Notation
// JSON
const user = {id: 11, name: 'kamrul', job: 'programmer'}
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified)
const shop = {
    name: 'Kamrul Store',
    address: 'Hasan Road',
    profit: 1500,
    products:['laptop', 'mobile', 'lemon'],
    owner: {
        name: 'Kamrul',
        profession: 'programmer',
    },
    isExpensive: false
};

// Convert object data to JSON data
const shopStringify = JSON.stringify(shop);

// console.log(shop);
console.log(shopStringify);

// Convert JSON data to object data
const converted = JSON.parse(shopStringify);
console.log(converted);
// console.log(converted.owner);