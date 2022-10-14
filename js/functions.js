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
