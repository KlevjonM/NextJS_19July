let person = {
    name: "John Doe",
    balance: 1000 
};

function withdraw(person, amount) {
    if (amount > person.balance) {
        console.log("Withdrawal cannot be processed due to insufficient funds.");
    } else {
        person.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance is $${person.balance}.`);
    }
}

console.log(`Current balance of ${person.name} is $${person.balance}.`);
withdraw(person, 500);
console.log(`Updated balance of ${person.name} is $${person.balance}.`);

withdraw(person, 1500); 
console.log(`Current balance of ${person.name} is $${person.balance}.`);