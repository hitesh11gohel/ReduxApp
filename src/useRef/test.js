import React, { useState, useRef, useEffect } from "react";

const Test = () => {
  const Name = useRef();
  const Email = useRef();
  const Contact = useRef();
  const [people, setPeople] = useState([]);
  const [msg, setMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name.current.value === "") {
      alert("Please Enter Name");
    } else if (Email.current.value === "") {
      alert("Please Enter Email");
    } else if (Contact.current.value === "") {
      alert("Please Enter Contact No");
    } else {
      const formData = {
        id: new Date().getTime().toString(),
        Name: Name.current.value,
        Email: Email.current.value,
        Contact: Contact.current.value,
      };
      console.log(formData);
      setMsg(true);
      setPeople(() => [...people, formData]);
      Name.current.value = "";
      Email.current.value = "";
      Contact.current.value = "";
      setTimeout(() => {setMsg(false)}, 3000)
    }
  };

  useEffect(() => {
    Name.current.focus();
  }, []);
  return (
    <div>
      <section className="flex">
        <article className="m-auto">
          <h1 className="text-center">I'm UseRef Hook</h1>
          <form action="">
            <input
              type="text"
              ref={Name}
              placeholder="Enter Name"
              className="m-2 p-2 bg-light"
            />
            <input
              type="text"
              ref={Email}
              placeholder="Enter Email"
              className="m-2 p-2 bg-light"
            />
            <input
              type="text"
              ref={Contact}
              placeholder="Enter Contact Number"
              className="m-2 p-2 bg-light"
            />
            <button className="m-2 btn btn-light" onClick={handleSubmit}>
              Go
            </button>
          </form>
        </article>
      </section>
      <h2 className="text-center text-success m-5">
       {msg && "Data Added Successfully"}
      </h2>
      <section className="mx-4 my-10">
        <h3>Customer Info :</h3>

        {people.map((person) => {
          const { Name, Email, Contact, id } = person;
          return (
            <>
              <article>
                <p key={id}>
                  Name : <b>{Name}</b>, Email : <b>{Email}</b>, Contact :
                  <b>{Contact}</b>
                </p>
              </article>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Test;
