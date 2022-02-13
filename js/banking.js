function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear deposit input field
    inputField.value = '';
    return amountValue;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // put number in deposit input box and get it in console
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue('deposit-input');

    // get current deposit $ from deposit input box and set in Diposit$ Area
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;


});
// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input');

    // set withdraw $ in withdraw total when click on withdraw-button.
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousewithdrawTotalText = withdrawTotal.innerText;
    const previousewithdrawTotal = parseFloat(previousewithdrawTotalText);

    withdrawTotal.innerText = previousewithdrawTotal + withdrawAmount;

    // update withdraw balance total 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    //
    //
    //
    //
    //
});
