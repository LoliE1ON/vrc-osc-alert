import osc from "osc";
import config from "../../config/osc.json" assert { type: "json" };

const client = new osc.UDPPort({ remotePort: config.port });
client.open();

export { client };
