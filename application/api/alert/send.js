export const send = (client, status) => {
    client.send({
        address: "/avatar/parameters/Alert",
        args: {
            type: "i",
            value: Number(status),
        },
    });
};
