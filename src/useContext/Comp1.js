import React, { createContext, useRef, useState } from "react";
import Comp2 from "./Comp2";

const BioData = createContext();

const Comp1 = () => {
  const name = useRef();
  const age = useRef();
  const email = useRef();
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name.current.value,
      age: age.current.value,
      email: email.current.value,
    };
    setUser([...user, formData]);
    name.current.value = "";
    age.current.value = "";
    email.current.value = "";
  };
  
  React.useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <div className="text-center m-auto">
      <h1>Component 1 :</h1>
      <BioData.Provider value={user}>
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" ref={name} className="bg-blue-100 p-1 m-2" />
          <input placeholder="Age" ref={age} className="bg-blue-100 p-1 m-2" />
          <input placeholder="Email" ref={email} className="bg-blue-100 p-1 m-2" />
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
        <Comp2 />
      </BioData.Provider>
    </div>
  );
};

export default Comp1;
export { BioData };
