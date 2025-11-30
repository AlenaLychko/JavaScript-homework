//  * Типів транзацкій всього два.
//  * Можна покласти або зняти гроші з рахунку.
// //  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */
// Історія транзакцій
/*
 * Метод створює і повертає об'єкт транзакції.
 * Приймає суму і тип транзакції.
 */
/*
 * Метод відповідає за додавання суми до балансу.
 * Приймає суму танзакції.
 * Викликає createTransaction для створення об'єкта транзакції
 * після чого додає його в історію транзакцій
 */
//      * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
/*
 * Метод повертає поточний баланс
 */
/*
 * Метод шукає і повертає об'єкт транзакції по id
 */
//      * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  transactionId: 0,

  createTransaction(amount, type) {
    this.transactionId += 1;
    return {
      id: this.transactionIb,
      type,
      amount,
    };
  },

  deposit(amount) {
    if (amount <= 0) {
      console.log("the deposit amount must be greater than 0");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    console.log(`Deposit successful: +${amount} $`);
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than 0");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds to withdraw this amount");
      return;
    }
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    console.log(`Withdrawal successful: -${amount}$`);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    const transaction = this.transactions.find((t) => t.id === id);
    if (!transaction) {
      console.log(`Transaction with id ${id}not found`);
      return null;
    }
    return transaction;
  },

  getTransactionTotal(type) {
    let total = 0;
    this.transactions.forEach((t) => {
      if (t.type === type) {
        t.amount;
      }
    });
    return total;
  },
};

account.deposit(1000);
account.withdraw(500);
console.log("balane:", account.getBalance());
console.log("Transaction details 1:", account.getTransactionDetails(1));
console.log(
  "Deposit amount:",
  account.getTransactionTotal(Transaction.DEPOSIT)
);
console.log(
  "Withdrawal amount:",
  account.getTransactionTotal(Transaction.WITHDRAW)
);
