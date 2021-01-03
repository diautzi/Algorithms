// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
// Example:
    // Input: accounts = [[1,2,3],[3,2,1]]
    // Output: 6

var maximumWealth = function(accounts) {
  // set result to 0
  let richestCustomerWealth = 0;
  // for each account, get users total wealth
  accounts.map(account => {
    const accountWealth = account.reduce((sum, wealth) => sum += wealth, 0)
	// check if total wealth of user account is greater than max wealth found
    if (richestCustomerWealth < accountWealth) richestCustomerWealth = accountWealth;
  })
  return richestCustomerWealth;
};