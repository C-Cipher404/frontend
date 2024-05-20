import React from "react";
import Header from "./components/Header";
const HelloWorld1 = () => {
  return (
    <div className="bg-[#1C67A4]">
      <Header />
      <main className="h-screen container mx-auto flex justify-center">
        <form className="space-y-3 flex-col  ">
          <h1 className="text-xl text-white">Create New Record</h1>
          <div className="flex ">
            <select
              className="border-2 border-white rounded-md py-1"
              name="salutation"
              id="salutation"
            >
              <option hidden>Salutations</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div className="flex flex-wrap space-x-3">
            <input
              required
              className="border-2 border-white rounded-md p-1"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name *"
            />
            <input
              className="border-2 border-white rounded-md p-1"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div className="flex space-x-3">
            <input
              className="border-2 border-white rounded-md p-1"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />

            <input
              className="border-2 border-white rounded-md p-1"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className="flex my-2  ">
            <select
              className="border-2 border-white rounded-md p-1 w-[187px]"
              name="product"
              id="product"
              placeholder="Select Product"
            >
              <option hidden>Select Product</option>
              <option value="ID1">Apple iPhone</option>
              <option value="ID2">Samsung Galaxy</option>
              <option value="ID3">Google Pixel</option>
              <option value="ID4">Motorola Edge</option>
              <option value="ID5">OnePlus</option>
            </select>
          </div>
          <button className="bg-black text-white p-2 px-6 text-sm rounded-lg">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};
export default HelloWorld1;
