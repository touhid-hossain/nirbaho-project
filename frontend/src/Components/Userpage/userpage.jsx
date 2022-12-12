import { useState } from "react";
import inputs from "../Userdata/Database";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Userpage/userpage.css";

const UserPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      // navigate('/login')
    }
  }, [user, navigate]);

  const dataStorage = Object.keys(inputs);
  const [ownerName, setOwnerName] = useState("");
  const [flatId, setFlatId] = useState("");

  const [houseBill, setHouseBill] = useState("0");
  const [waterBill, setWaterBill] = useState("0");
  const [serviceBill, setServiceBill] = useState("0");
  // Manual Input State
  const [gasBill, setGasBill] = useState(0);
  const [electricBill, setElectricBill] = useState(0);

  const [date, setDate] = useState("");

  //
  const details = (e) => {
    const currentValue = e.target.value;
    const data = inputs[currentValue];

    setOwnerName(data.name);
    setFlatId(data.flat);
    setHouseBill(data.HouseBill);
    setWaterBill(data.WaterBill);
    setServiceBill(data.ServiceCharge);
  };

  // Chose Bill Date
  const billDate = (e) => {
    const currentDate = e.target.value;
    setDate(currentDate);
  };

  // Total Amount Calculation
  const totalAmount =
    houseBill + serviceBill + waterBill + gasBill + electricBill;

  return (
    <div className="page_container">
      <h1>Welcome To BILLPage</h1>
      <p>Please Fill-up the form below :</p>
      {/* <!-- Choose Name and flat No --> */}
      <div className="choice_area">
        {/* <!-- Name selector --> */}
        <form className="form-group">
          <label htmlFor="">Choose Your Name :</label>
          <input list="owner_name" placeholder="Name" onChange={details} />
          <datalist id="owner_name">
            {dataStorage.map((name, id) => (
              <option key={id}>{name}</option>
            ))}
          </datalist>
          {/* <!-- Flat-No Selector --> */}
          <label>Flat Number :</label>
          <input id="flat_number" placeholder="Flat-No" defaultValue={flatId} />
          <datalist id=""></datalist>
          <label htmlFor=""> Choose your bill date :</label>
          <input type="date" name="" id="date" onChange={billDate} />
        </form>
      </div>

      {/* <!-- Flat owner details --> */}
      <div className="owner_details">
        <h2>
          FLAT OWNER NAME : <span id="ownerName">{ownerName}</span>
        </h2>
        <h2>
          FLAT NUMBER : <span id="flatNumber">{flatId}</span>
        </h2>
        <h2>
          BILL DATE : <span id="billDate">{date}</span>
        </h2>
      </div>

      {/* <!-- 2nd part --> */}
      {/* <!-- Bill details --> */}
      <div className="my-10">
        <div class="sm:pt-10 bg-slate-300">
          {/* <!-- List-Details-Table_start --> */}
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full sm:px-12">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="pb-7 px-8 bg-[#3B3B3B]">
                      <tr class="text-white">
                        <th
                          scope="col"
                          class="rounded-tl-xl whitespace-nowrap font-bold sm:w-[20%] text-sm sm:text-base px-10 py-6 text-center"
                        >
                          NO
                        </th>
                        <th
                          scope="col"
                          class=" whitespace-nowrap font-bold sm:w-[60%] text-sm sm:text-base px-10 py-6 text-center"
                        >
                          SERVICE DESCRIPTION
                        </th>
                        <th
                          scope="col"
                          class="rounded-tr-xl whitespace-nowrap sm:w-[20%] font-bold text-sm sm:text-base px-10 py-6 text-center"
                        >
                          TOTAL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="">
                        <td class="w-[20%] text-sm sm:text-base font-medium bg-[#F6F6F6] text-[#474747] text-center px-10 py-6 whitespace-nowrap">
                          01
                        </td>
                        <td class="whitespace-nowrap w-[60%] px-10 py-6 text-sm sm:text-base font-medium text-[#474747]">
                          House Bill
                        </td>
                        <td class="w-[20%] bg-[#F6F6F6] text-sm sm:text-base font-medium text-[#474747] px-10 py-6 whitespace-nowrap text-center">
                          ${houseBill}
                        </td>
                      </tr>
                      <tr class="">
                        <td class="w-[20%] text-sm sm:text-base bg-[#F6F6F6] font-medium text-[#474747] px-10 py-6 whitespace-nowrap text-center">
                          02
                        </td>
                        <td class="whitespace-nowrap w-[60%] px-10 py-6 text-sm sm:text-base font-medium text-[#474747]">
                          Service Charge
                        </td>
                        <td class="w-[20%] bg-[#F6F6F6] text-sm sm:text-base font-medium text-[#474747] px-10 py-6 whitespace-nowrap text-center">
                          ${serviceBill}
                        </td>
                      </tr>
                      <tr class="">
                        <td class="w-[20%] text-sm sm:text-base bg-[#F6F6F6] font-medium text-[#474747] text-center px-10 py-6 whitespace-nowrap">
                          03
                        </td>
                        <td class="whitespace-nowrap w-[60%] px-10 py-6 text-sm sm:text-base font-medium text-[#474747]">
                          Water Bill
                        </td>
                        <td class="w-[20%] bg-[#F6F6F6] text-sm sm:text-base font-medium text-[#474747] px-10 py-6 whitespace-nowrap text-center">
                          ${waterBill}
                        </td>
                      </tr>
                      <tr class="">
                        <td class="w-[20%] text-sm sm:text-base bg-[#F6F6F6] font-medium text-[#474747] text-center px-10 py-6 whitespace-nowrap">
                          04
                        </td>
                        <td class="whitespace-nowrap w-[60%] px-10 py-6 text-sm sm:text-base font-medium text-[#474747]">
                          Gas Bill
                        </td>
                        <td class="w-[20%] bg-[#F6F6F6] text-sm sm:text-base font-medium text-[#474747] px-10 py-6 whitespace-nowrap text-center">
                          <input
                            type="text"
                            name=""
                            id="gas_bill"
                            className="gas-bill"
                            value={gasBill}
                            onInput={(e) =>
                              setGasBill(parseInt(e.target.value))
                            }
                          />
                        </td>
                      </tr>
                      <tr class="">
                        <td class="w-[20%] text-sm sm:text-base bg-[#F6F6F6] font-medium text-[#474747] text-center px-10 py-6 whitespace-nowrap">
                          05
                        </td>
                        <td class="whitespace-nowrap w-[60%] px-10 py-6 text-sm sm:text-base font-medium text-[#474747]">
                          Electricity Bill
                        </td>
                        <td class="w-[20%] bg-[#F6F6F6] text-sm sm:text-base font-medium text-[#474747] px-10 py-6 whitespace-nowrap text-center">
                          <input
                            type="text"
                            name=""
                            id="electricity_bill"
                            className="electricity-bill"
                            value={electricBill}
                            onInput={(e) =>
                              setElectricBill(parseInt(e.target.value))
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class=" -mt-1.5">
              <div class="items-center text-right bg-[#3B3B3B] rounded-b-xl">
                <p class="text-sm text-white border-[#E2E2E2] sm:text-base lg:text-lg font-bold p-4 text-right">
                  TOTAL : <span className="mx-14">${totalAmount}</span>
                </p>
              </div>
            </div>
            {/* <!-- list_seven subtotal ends --> */}
            {/* <!-- list-end --> */}
          </div>
        </div>
        <div class="flex pt-10">
          <button class="px-7 py-3 rounded-lg bg-[#F24405] border-2 text-sm sm:text-base font-semibold text-white hover:border-2 border-[#F24405] hover:bg-white duration-300 hover:text-[#F24405] ">
            Pay Now
          </button>
        </div>

        {/* <!-- footer start --> */}
        <footer class="sm:pt-4 lg:pt-12 w-full sm:w-[40%]">
          <p class=" text-[#F24405] text-center mt-8 text-xl font-semibold">
            &copy; Credit : - [T & M]
          </p>
        </footer>
        {/* <!-- footer ends (2-hit) --> */}
      </div>
    </div>
  );
};

export default UserPage;
