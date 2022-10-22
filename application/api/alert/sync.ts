import config from "../../config/animationParameters.json";

export const sync = (client, status) => {
    try {
        client.send({
            address: config.alert.address,
            args: {
                type: config.alert.type,
                value: Boolean(status),
            },
        });
    } catch (throwable) {
        console.error(throwable);
    }
};
