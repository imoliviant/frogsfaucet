function claimFrog() {
    var content = "Sending transaction from: ";
    content += frog;
    $("#frog1").html(content);
    var event = contractFaucet.methods.claimToken().send({ from: frog, value: 50000000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "SciFrog sent! ";
    $("#frog1").html(content);
        });;
};
