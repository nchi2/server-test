const ip = require("ip");

const getControll = {
    main: (req, res) => {
        res.send(`Hello from server ${ip.address()}`);
    },
    api: (req, res) => {
        res.json({ message: "Hello from server", ip: ip.address(), port: 3000 });
    },
        apiName: (req, res) => {
        res.json({ message: "Hello namename", ip: ip.address(), port: 3000 });
    },
}

module.exports = getControll;