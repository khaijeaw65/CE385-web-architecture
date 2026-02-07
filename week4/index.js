import operation from "./operation.js";

const w4_1 = () => {
  console.log("add case: ", operation("add", 4, 5));
  console.log("subtract case: ", operation("subtract", 10, 3));
  console.log("multiply case: ", operation("multiply", 5, 6));
  console.log("divide case: ", operation("divide", 8, 2));
  console.log("modulus case: ", operation("modulus", 5, 3));
};

const w4_2 = () => {
  const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
      const data = { message: "Data fetched with callback" };
      callback(data);
    }, 2000);
  };

  const fetchDataWithPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { message: "Data fetched with promise" };
        resolve(data);
      }, 2000);
    });
  };

  fetchDataWithCallback((data) => {
    console.log(data);
  });

  fetchDataWithPromise()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data with promise:", error);
    });
};

const w4_3 = async () => {
  const simulateAsyncOperation = (timeout) => {
    return new Promise((resolve, reject) => {
      if (timeout < 1000) {
        reject(new Error("Timeout too short"));
      }

      setTimeout(() => {
        resolve(`Operation completed in ${timeout} ms`);
      }, timeout);
    });
  };

  const performAsyncTask = async (timeout) => {
    try {
      const result = await simulateAsyncOperation(timeout);
      console.log(result);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  await performAsyncTask(1500);
  await performAsyncTask(500);
};

const w4_4 = async () => {
  const fetchDataFromServer1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: "Data from server 1" });
      }, 2000);
    });
  };

  const fetchDataFromServer2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ message: "Data from server 2" });
      }, 1000);
    });
  };

  const fetchDataFromServer3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: "Data from server 3" });
      }, 3000);
    });
  };

  const result1 = await Promise.race([
    fetchDataFromServer1(),
    fetchDataFromServer2(),
    fetchDataFromServer3(),
  ]).then(value => value)
    .catch(error => error);

  const result2 = await Promise.allSettled([
    fetchDataFromServer1(),
    fetchDataFromServer2(),
    fetchDataFromServer3(),
  ]);

  console.log("Fastest response:", result1);
  console.log("All responses:", result2);
};

w4_4();