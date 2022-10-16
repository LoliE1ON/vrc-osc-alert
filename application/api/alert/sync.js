export const sync = (client, status) => {
    try {
        client.send({
            address: "/avatar/parameters/Alert",
            args: {
                type: "i",
                value: Number(status),
            },
        });
    } catch (throwable) {
        console.error(throwable);
    }
};
