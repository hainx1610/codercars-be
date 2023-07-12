const fs = require("fs");

const transformData = () => {
  let dataArr = JSON.parse(fs.readFileSync("carsdata.json"));
  dataArr = dataArr.map((el, index) => {
    const { Make, Model, Year, MSRP } = el;
    const make = Make;
    const model = Model;
    const release_date = Year;
    const transmission_type = el["Transmission Type"];
    const size = el["Vehicle Size"];
    const style = el["Vehicle Style"];
    const price = MSRP;
    const isDeleted = false;
    return {
      make,
      model,
      release_date,
      transmission_type,
      size,
      style,
      price,
      isDeleted,
    };
  });
  fs.writeFileSync("carsdata.json", JSON.stringify(dataArr));
};

transformData();
