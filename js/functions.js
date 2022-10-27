function balance() {
    var event = contractFrogs.methods.balanceOf("0x40507fa6419477725622fB880364779d54ADa311").call()
         .then(function(result) {
             var content = "Frogs on Contract: ";
             content += JSON.stringify(result.toString() / 1000000000000000000);
             $("#frog2").html(content);
         });;
};

function claimFrogs() {
    var content = "Sending transaction from: ";
    content += frog;
    $("#frog1").html(content);
    var event = contractFaucet.methods.claimToken(frog).send({ from: frog, value: 28500000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Frogs sent! ";
    $("#frog1").html(content);
        });;
};

// Stake
function approveLP() {
    var amount1 = $("#frogLPamount").val();
    var amount2 = amount1 * 1000000000000000000;
    var amount3 = amount2.toString();
    var content = "Approving transaction from: ";
    content += frog;
    $("#frog3").html(content);
    var event = contractFrogs.methods.approve("0xa6Bf93188f1BCD9b09F1d439adfE0D56127099D8", amount3).send({ from: frog })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#frog3").html(content);
        });;
};

function stakeTokens() {
    var amount1 = $("#frogLPamount").val();
    var amount2 = amount1 *1000000000000000000;
    var amount3 = amount2.toString();
    var content = "Sending transaction from: ";
    content += frog;
    $("#frog3").html(content);
    var event = contractFrogFarm.methods.stakeTokens(amount3).send({ from: frog })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! Staked!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#frog3").html(content);
        });;
};
