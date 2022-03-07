
let orders = [
    {
        orderId: 1,
        status: "success",
        payment: 1,
    },
    {
        orderId: 2,
        status: "success",
        payment: 2,
    },
    {
        orderId: 3,
        status: "failed",
        payment: 3,
    },
];

function getSumOrderPayment() {
    let paymentSum = 0;
    for (let order of orders) {
        if (order.status === "success") {
            paymentSum += order.payment;
        }
    }
    return paymentSum;
}
