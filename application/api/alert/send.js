export const send = (client, status) => {
    client.send({
        address: "/test",
        args: {
            type: "f",
            value: status,
        },
    });
};
