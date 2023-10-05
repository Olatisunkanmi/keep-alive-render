const axios = require("axios");
require("dotenv").config();

const _log = (options) => {
  console.log(options);
};

class Ping {
  constructor(obj) {
    this.interval = obj.interval || 60000;
    this.tries = 1;
    this.status = "healthy";
    this.url = process.env.APP_LIVE_URL;
  }

  log(options) {
    file: options.file || "log.txt";
    data: options.data;
  }

  runJob() {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get(this.url);

        _log({
          message: "success",
          tries : this.tries,
          url: this.url,
          data: res.data,
          code: res.status,
        });

        this.tries++;
       
      } catch (error) {
        _log({
          message: "Fail",
          tries : this.tries,
          url: this.url,
          data: error,
          
        });
        this.tries++;

      }
    }, this.interval);
    return interval;
  }

  init() {
    return this.runJob();
  }

  static createPing(options) {
    const newPingInstance = new Ping(options);
    return newPingInstance.init();
  }
}

module.exports = Ping;
