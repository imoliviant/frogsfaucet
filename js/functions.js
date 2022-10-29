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
    var event = contractBenswapLP.methods.approve("0x97B07F3A8B6a374Ff03EfE64eB85391B6Dd1c5f7", amount3).send({ from: frog })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#frog3").html(content);
        });;
};

function stakeLP() {
    var amount1 = $("#frogLPamount").val();
    var amount2 = amount1 *1000000000000000000;
    var amount3 = amount2.toString();
    var content = "Sending transaction from: ";
    content += frog;
    $("#frog3").html(content);
    var event = contractFrogFarm.methods.stakeTokens(amount3).send({ from: frog, value: 60000000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! Staked!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#frog3").html(content);
        });;
};
function calculateReward() {
    var event = contractFrogFarm.methods.calculateReward().call({ from: frog })
        .then(function (result) {
    var content = "Your current FROG reward is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#frog4").html(content);
        });;
};
function harvestYield() {
    var content = "Sending transaction from: ";
    content += frog;
    $("#frog5").html(content);
    var event = contractFrogFarm.methods.claimYield().send({ from: frog, value: 30000000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Frogs sent! ";
    content += JSON.stringify(receipt.transactionHash);
    $("#frog5").html(content);
        });;
};
function balanceBLP() {
    var event = contractBenswapLP.methods.balanceOf(frog).call()
        .then(function (result) {
    var content = "Your BLP Balance is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#frog6").html(content);
        });;
};
function contractBal() {
    var event = contractFrogs.methods.balanceOf(frog).call()
        .then(function (result) {
    var content = "Frogs on contract : ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#frog7").html(content);
        });;
};
