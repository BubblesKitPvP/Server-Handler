import Discord from "./modules/discord/discord";
import Handler from "./modules/handler";
import Cache from "./utils/cache";
import ExitHandler from "./utils/exit/exit";

await Cache.Init();
await Handler.Init();
await Discord.Init();

new ExitHandler();
