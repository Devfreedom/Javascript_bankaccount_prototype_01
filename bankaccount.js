class bankAccount {
    constructor(name, balance, accountnumber) {
        this.name = name;
        this.balance = balance;
        this.accountnumber = this.generateAccountno()
    }
    // accountnumber = [];
    generateAccountno(length = 10) {
        let digits = Math.floor(Math.random() * Math.pow(10, length)).toString();
        return digits
    }
    transfer(amount, recipentAccountno, accounttype) {
        if (amount <= this.balance) {
            if (accounttype == recipentAccountno.accounttype) {
                this.balance -= amount;
                recipentAccountno.balance += amount;
                console.log(`Successfully transferred $${amount} to Account ${recipentAccountno.accountNumber}`);
            }else{
                console.log("Transaction failed invalid account type")
            }
        } else {
            console.log("Transaction failed: Insufficient funds.");
        }
    }
    deposit(money) {
        return this.balance += money
    }
    withdraw(money) {
        if (money <= this.balance) {
            this.balance -= money

        } else if (money > this.balance) {
            console.log(`Insufficent balance`)
        }

    }
    freezeaccount() {
        if (this.withdraw < 3) {
            console.log("Account frozen")
        }
    }

}
let freedom = new bankAccount("freedom", 10000)
let charles = new bankAccount("charles", 2000)
Object.freeze(charles)
charles.accounttype = "savings account";

freedom.withdraw(100)
freedom.withdraw(100)
freedom.withdraw(100)
freedom.withdraw(100)
freedom.transfer(1000, charles, "savings account")
// freedom.deposit(1000)
console.log(freedom)
console.log(charles)