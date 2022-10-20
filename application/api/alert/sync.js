export const sync = (client, status) => {
    try {
        client.send({
            address: "/avatar/parameters/EnableAlert",
            args: {
                type: "i",
                value: Number(status),
            },
        });
    } catch (throwable) {
        console.error(throwable);
    }
};
