function printMessages(action) {
    if (action) {
        console.log("Everything is correct:)");
    } else {
        console.error("Something gone wrong:(");
    }
}

module.exports = printMessages;