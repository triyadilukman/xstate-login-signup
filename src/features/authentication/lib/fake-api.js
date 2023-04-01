export const simulatedBadApi = ({ fieldData }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const keys = Object.keys(fieldData);
      const randomKey = keys[Math.floor(Math.random() * (keys.length - 1))];
      const currentSecond = new Date().getSeconds();

      const fakeServerError =
        "The Server is down for scheduled maintainance, please try again later.";

      const fakeFieldErrors = {
        [randomKey]: `The Server randomly decided that ${randomKey} is invalid`
      };

      if (currentSecond < 15) {
        console.info("Fake Server: Should Simulate Server Error");
        return reject({
          message: fakeServerError
        });
      }
      if (currentSecond < 30) {
        console.info(
          "Fake Server: Should Simulate Field Error with '%s'",
          randomKey
        );
        return reject({
          remoteFieldErrors: fakeFieldErrors
        });
      }
      if (currentSecond < 45) {
        console.info(
          "Fake Server: Should Simulate Server Error & Field Error with '%s'",
          randomKey
        );
        return reject({
          message: fakeServerError,
          remoteFieldErrors: fakeFieldErrors
        });
      }
      return resolve();
    }, 2000);
  });
