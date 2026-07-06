class bankAccount {
    constructor(name, balance, userstatus, accountnumber) {
        this.name = name;
        this.balance = balance;
        this.userstatus = userstatus
        this.accountnumber = this.generateAccountno();
    }
    // accountnumber = [];
    generateAccountno(length = 10) {
        let digits = Math.floor(Math.random() * Math.pow(10, length)).toString();
        return digits
    }
    transfer(amount, recipentAccountno, accounttype) {
        if (amount <= this.balance) {
            if (accounttype == recipentAccountno.accounttype) {
                if (recipentAccountno.userstatus === "active") {
                    this.balance -= amount;
                    recipentAccountno.balance += amount;
                    console.log(`Successfully transferred $${amount} to ${recipentAccountno.name}`);
                }else{
                    console.log(`this account is already deactivated`)
                }
            } else {
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
    userstatus(name) {
        if (name.userstatus === active) {
            return "Bank user active"
        } else {
            return "bankk user inactive"
        }
    }
    deactivateAccount() {
        this.userstatus = "inactive"
    }


}
let freedom = new bankAccount("freedom", 10000, "active")
let charles = new bankAccount("charles", 2000, "active")
// Object.freeze(charles)
charles.deactivateAccount()
charles.accounttype = "savings account";

freedom.withdraw(100)
freedom.withdraw(100)
freedom.withdraw(100)
freedom.withdraw(100)
freedom.transfer(1000, charles, "savings account")
// freedom.deposit(1000)
console.log(freedom)
console.log(charles)