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
                if (recipentAccountno.userstatus === "active" && this.userstatus === "active") {
                    this.balance -= amount;
                    recipentAccountno.balance += amount;
                    console.log(`Successfully transferred ${amount} naira to ${recipentAccountno.name}`);
                } else {
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
        if (this.userstatus == "active") {
            return this.balance += money
        } else {
            console.log(`Transaction failed: Your account has been deactivated`)
        }
    }
    withdraw(money) {
        if (money <= this.balance) {
            if (this.userstatus == "active") {
                this.balance -= money
            }else{
                console.log(`Transaction failed: Your account has been deactivated`)
            }

        } else{
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
freedom.accounttype = "current account"
let charles = new bankAccount("charles", 0, "active")
charles.accounttype = "savings account";
// Object.freeze(charles)
// freedom.deactivateAccount()

freedom.deposit(1000000)
freedom.withdraw(10000)
freedom.transfer(500000, charles, "savings account")
console.log(freedom)
console.log(charles)