const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://127.0.0.1:27017/relationDemo';
const { Schema } = mongoose;

main()
    .then(() => console.log('Connection successful'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
};

const orderSchema = new Schema({
    item: String,
    price: Number
});

const customerSchema = new Schema({
    username: String,
    orders: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Order'
        }
    ]
});

// customerSchema.pre('findOneAndDelete', async () => {
//     console.log('pre middleware executed');
// });

customerSchema.post('findOneAndDelete', async (customer) => {
    if (customer.order.length) {
        let result = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(result);
    }
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const addOrders = async () => {
    let result = await Order.insertMany([
        { item: 'mango', price: 20 },
        { item: 'banana', price: 10 },
        { item: 'guaba', price: 15 }
    ]);

    console.log(result);
}

// addOrders();

const addCustomers = async () => {
    let cust1 = new Customer({
        username: 'Jack'
    });

    let order1 = await Order.findOne({ item: 'banana' });
    let order2 = await Order.findOne({ item: 'guaba' });

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
};

// addCustomers();

const findCustomers = async () => {
    let result = await Customer.find().populate('orders');
    console.log(result[0]);
};

// findCustomers();

const addCustomers2 = async () => {
    let cust2 = new Customer({
        username: 'Bruce'
    });

    let order = new Order({
        item: 'apple',
        price: 30
    });

    cust2.orders.push(order);

    await order.save();
    await cust2.save();
};

// addCustomers2();

const delCustomers2 = async () => {
    let result = await Customer.findByIdAndDelete('6998c9f565fbaa2dc7ac0480');
    console.log(result);
};

delCustomers2();