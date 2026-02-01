const w3_1 = () => {
  let sumEven = 0;
  let productOdd = 1;

  for (let index = 2; index <= 50; index += 1) {
    if (index % 2 === 0) {
      sumEven += index;
    }
  }

  for (let index = 1; index <= 10; index += 1) {
    if (index % 2 !== 0) {
      productOdd *= index;
    }
  }

  console.log("sumEven:", sumEven);
  console.log("productOdd:", productOdd);
};

const w3_2 = () => {
  const calculateBMI = (weight, height) => {
    const bmiCategory = {
      underWeight: "ผอม",
      normal: "ปกติ",
      obese: "อ้วน",
      extremelyObese: "อ้วนมาก",
    };

    const bmi = weight / (height * height);

    let category = "";

    if (bmi < 18.5) {
      category = bmiCategory.underWeight;
    } else if (bmi < 25) {
      category = bmiCategory.normal;
    } else if (bmi < 30) {
      category = bmiCategory.obese;
    } else {
      category = bmiCategory.extremelyObese;
    }
    return {
      bmi: bmi.toFixed(2),
      category,
    };
  };

  console.log(calculateBMI(70, 1.75));
  console.log(calculateBMI(50, 1.60));
  console.log(calculateBMI(90, 1.70));
};