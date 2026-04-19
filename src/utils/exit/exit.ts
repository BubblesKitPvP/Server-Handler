import Handler from "../../modules/handler";

export default class ExitHandler {
  public constructor() {
    this.Init();
  }

  private Init(): void {
    process.once("SIGTERM", async () => {
      console.log("Shutting down...");

      if (Handler.IsRunning()) {
        Handler.Stop();

        await new Promise((resolve) => {
          const loop = setInterval(() => {
            if (!Handler.IsRunning()) {
              clearInterval(loop);
              resolve(true);
            }
          });
        });
      }

      process.exit(0);
    });
  }
}
