class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit() {
        return `The amount has been deposited into account ${this.acctNum}`;
    }
    withdraw() {
        return `The amount withdrawn from account ${this.acctNum}`;
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw() {
        console.log('Override withdrawto implement overdraft feature');
    }
}

class SavingsAccount extends BankAccount {
    withdraw() {
        console.log('Override withdraw to disallow withdrawals completely');
    }
}

const customer1 = new CheckingAccount('Jim', 25000, 3210233562, true);
const customer2 = new SavingsAccount('Jack', 250000, 3210233563);
console.log(customer1);
console.log(customer2);

customer1.withdraw();
customer2.withdraw();