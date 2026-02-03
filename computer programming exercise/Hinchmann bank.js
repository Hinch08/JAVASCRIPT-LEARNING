let account = []
function createAccount(name, initialDeposit=0) {
    let newAccount = {
        name: name,
        balance: initialDeposit
    };
    account.push(newAccount);
    return newAccount;
}
function deposit(account, amount){
    account.balance += amount;
    return account.balance;
}
function withdraw(account, amount){
    if(amount > account.balance){
        console.log("Insufficient funds");
        return account.balance;
    }else{
        account.balance -= amount;
        return account.balance;
    } 
}
function getBalance(account){
    return account.balance;
}
function closeAccount(account){
    let index = account.indexOf(account);
    if(index !== -1){
        account.splice(index, 1);
    }
}