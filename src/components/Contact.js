import React from "react";

const Contact = () => {
  return (
    <div className=" mb2">
      <h2 className="ma2 f2 red tc">KONTAKT</h2>

      <div className="flex flex-column justify-around items-center ma4 ">
        <div className=" shadow-5 grow pa3 tc  br3 h-50 mb2 ">
          <h3 className="  f2">Naslov </h3>
          <p className="i mt1 red">
            55 Washington drive
            <br /> Mayeyo 3310
          </p>
        </div>

        <div className="shadow-5 grow pa3 tc ma2  br3">
          <h3 className="f2">Eletronski naslov</h3>
          <p className="mt1 i red ">info@devjay.com</p>
        </div>

        <div className="shadow-5 grow pa3 tc mt2  br3">
          <h3 className=" f2">Telefonsko številko </h3>
          <p className="i mt1  red">012345</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
