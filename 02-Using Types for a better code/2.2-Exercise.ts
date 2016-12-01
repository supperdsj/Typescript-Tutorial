// Try to be as explicit as possible and add Types to everything you can! ```
// let bankAccount = {
// money: 2000,
// deposit(value) { this.money += value; }
// };
// let myself = {
// name: "Max",
// bankAccount: bankAccount, hobbies: ["Sports", "Cooking"] };
// myself.bankAccount.deposit(3000);
// console.log(myself ); ```
(function () {
    type backAccountType={money: number,deposit: (value: number)=>void};
    let bankAccount: backAccountType = {
        money: 2000,
        deposit(value: number): void {
            this.money += value;
        }
    };
    let myself: {name: string,bankAccount: backAccountType,hobbies: string[]} = {
        name: "Max",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };
    myself.bankAccount.deposit(3000);
    console.log(myself);
})();