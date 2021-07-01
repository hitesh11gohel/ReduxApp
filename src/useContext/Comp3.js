import React, { useContext } from "react";
import { BioData } from "./Comp1";

const Comp3 = () => {
  const Data = useContext(BioData);
  console.log(Data);
  return (
    <div className="text-center m-auto">
      <h4>
        Component 3 :
        {Data.map((data, index) => {
          const { name, age, email } = data;
          return (
            <>
              <div>
                <p key={index}>
                  Name : {name}, Age : {age}, Email : {email}
                </p>
              </div>
            </>
          );
        })}
      </h4>
    </div>
  );
};

export default Comp3;
