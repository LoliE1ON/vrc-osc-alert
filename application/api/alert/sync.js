import config from "../../config/animationParameters.json" assert { type: "json" };

export const sync = (client, status) => {
    try {
        client.send({
            address: config.alert.address,
            args: {
                type: config.alert.type,
                value: Number(status),
            },
        });
    } catch (throwable) {
        console.error(throwable);
    }
};
