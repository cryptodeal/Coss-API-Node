const Coss = require('./index')();

(async function () {
    try {
//Each function returns an object that is the server's response to the API call: i.e. res.body 
//Returning as an Object makes it easier to use/parse the data from bot.js or any strategy file than as a string or any other form.

//private functionalities: 

    //placeLimitOrder: Returns Object res.body
        //const myOrder = await Coss.placeLimitOrder({Symbol: 'coss-eth', Side: 'Buy', Price: 0.00035981, Amount: 100});
        //console.log(JSON.stringify(myOrder));

    //placeMarketOrder: Returns Object res.body
        //const marketOrder = await Coss.placeMarketOrder({Symbol: 'coss-eth', Side: 'Buy', Price: 0.0000294, Amount: 50});
        //console.log(JSON.stringify(marketOrder));

    //cancelOrder: Returns Object res.body
        //const cancelOrder = await Coss.cancelOrder({ID: '5c9bdabc-017d-4161-b0ae-dc3ecb57466c', Symbol: 'coss-eth'});
        //console.log(JSON.stringify(cancelOrder))

    //getOrderDetails: Returns Object res.body
        //const OrderDetails = await Coss.getOrderDetails({ID: '58cead73-474e-4ac7-8f39-ae3875b41ff6'});
        //console.log(JSON.stringify(OrderDetails))

    //getOpenOrders: Returns Object res.body
        //const openOrders = await Coss.getOpenOrders({Limit: 10, Symbol: "coss-eth"});
        //console.log(JSON.stringify(openOrders))

    //getAccountBalances: Returns Object res.body
        //const getBalance = await Coss.getAccountBalances()
        //console.log(JSON.stringify(getBalance))

    //getAccountDetails: Returns Object res.body
        //const accountDetails = await Coss.getAccountDetails()
        //console.log(JSON.stringify(accountDetails))

//public functionalities:

    //getMarketPrice: Returns Object res.body
        //const marketPrice = await Coss.getMarketPrice({Symbol: "eth-btc"});
        //console.log(JSON.stringify(marketPrice));

    //getPairDepth: Returns Object res.body
        //const pairDepth = await Coss.getPairDepth({Symbol: "coss-eth"});
        //console.log(JSON.stringify(pairDepth))

    //getMarketSides: Returns a Nested array of data in this order: [[firstBidPrice, firstBidQuantity][firstAskPrice, firstAskQuantity]]
         const marketSides = await Coss.getMarketSides({Symbol: "coss-eth"});
         console.log(JSON.stringify(marketSides))


    } catch (err) {
        console.error(err);
    }
})();
