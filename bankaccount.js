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
    transfer(amount, recipentAccountno) {
        if (amount <= this.balance) {
            this.balance -= amount;
            recipentAccountno.balance += amount;
            console.log(`Successfully transferred $${amount} to Account ${recipientAccount.accountNumber}`);
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
freedom.withdraw(100)
freedom.withdraw(100)
freedom.withdraw(100)
freedom.withdraw(100)
// freedom.deposit(1000)
console.log(freedom)