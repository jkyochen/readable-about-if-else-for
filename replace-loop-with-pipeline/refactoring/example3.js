
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
    return orders
        .filter(order => order.status === "success")
        .map(order => order.payment)
        .reduce((acc, cur) => {
            return acc + cur;
        });
}

function getSumOrderPayment2() {
    return orders
        .filter(order => order.status === "success")
        .reduce((totalPayment, order) => {
            return totalPayment + order.payment;
        }, 0);
}
