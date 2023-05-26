import React, { useEffect, useState } from "react";
import { Header, NavBoxes, ApexChart } from "../../../components";
import { DropdownMonths } from "../../../components/dropdowns/MonthlyFilterDropdown";
import { DropdownUsers } from "../../../components/dropdowns/UsersDropdown";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";

function HomePage() {
  const navigate = useNavigate();
  const [playerMonth, setPlayerMonth] = useState([]);
  const [playerCount, setPlayerCount] = useState([]);
  const [selectedOption, setSelectedOption] = useState("players");
  const [selectDays, setSelectDays] = useState(50);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleNavBoxes = (title) => {
    if (title === "Contact Submissions") {
      navigate("/submission");
    } else if (title === "Subscribers") {
      navigate("/subscribers");
    } else if (title === "Player Signup") {
      navigate("/users");
    } else if (title === "Distributor Signup") {
      navigate("/users");
    }
  };

  const { data: users } = useQuery(["users"], async () => {
    try {
      const res = await axios.get(
        "/dashboardstats/count/playersSignup-thisMonth"
      );
      return res.data;
    } catch (error) {
      console.log("error>>>", error);
    }
  });

  const { data: contact } = useQuery(["contact"], async () => {
    try {
      const res = await axios.get(
        "/dashboardstats/count/distributerSignup-thisMonth"
      );
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  });

  const { data: submissions, isLoading } = useQuery(
    ["submissions"],
    async () => {
      try {
        const res = await axios.get("/dashboardstats/count/contactSubmissions");
        return res.data;
      } catch (error) {
        throw new Error(error);
      }
    }
  );

  const { data: subscribers } = useQuery(["subscribers"], async () => {
    try {
      const res = await axios.get(
        "/dashboardstats/count/subscribers-thisMonth"
      );
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `/dashboardstats/graph/${selectedOption}?days=${selectDays}`
        );
        const data = res.data;
        setPlayerMonth(data?.map((Item) => Item.month) || []);
        setPlayerCount(data?.map((Item) => Item.count) || []);
      } catch (error) {
        console.log("error>>>", error);
      }
    };
    getUserData();
  }, [selectedOption, selectDays]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSelectedUser(null);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="bg-primary min-h-screen">
        <div>
          <Header />
        </div>

        <div className="bg-primary lg:px-10 px-0 lg:py-0 py-10 flex-grow flex flex-col">
          <h3 className="text-textWhite px-5 lg:mt-9 mt-20 pb-5 sm:pb-0 lg:px-0  font-semibold text-2xl  font-[Barlow]">
            Statistics
          </h3>
          <div className="flex flex-wrap md:flex-nowrap  gap-7  lg:px-0 px-5  w-full">
            <NavBoxes
              title="Contact Submissions"
              counts={submissions ? submissions.count : "00"}
              ratio="24"
              duration="Overall"
              onClick={() => handleNavBoxes("Contact Submissions")}
            />
            <NavBoxes
              title="Subscribers"
              counts={subscribers ? subscribers.count : "00"}
              ratio="24"
              duration="This Month"
              onClick={() => handleNavBoxes("Subscribers")}
            />
            <NavBoxes
              title="Player Signup"
              counts={users ? users.count : "00"}
              ratio="24"
              duration="This Month"
              onClick={() => handleNavBoxes("Player Signup")}
            />
            <NavBoxes
              title="Distributor Signup"
              counts={contact ? contact.count : "00"}
              ratio="24"
              duration="This Month"
              onClick={() => handleNavBoxes("Distributor Signup")}
            />
          </div>

          <div
            className="rounded-md my-5 z-auto mx-5 lg:mx-0"
            style={{ border: "2px solid #311A67", flexGrow: "1" }}
          >
            <div className="px-5 py-5 flex justify-between items-center flex-wrap space-y-2 sm:space-y-0">
              <h2 className="text-white text-2xl font-semibold font-[Barlow]">
                Users
              </h2>
              <div className="flex  space-x-4 ">
                <DropdownUsers
                  onSelectedOption={handleOptionSelect}
                  selectedOption={selectedOption}
                />
                <DropdownMonths
                  setSelectDays={setSelectDays}
                  selectDays={selectDays}
                />
              </div>
            </div>
            <div className=" px-2 h-[520px]">
              {playerCount.length > 0 && playerMonth.length > 0 && (
                <ApexChart
                  playerCount={playerCount}
                  playerMonth={playerMonth}
                  selectedOption={selectedOption}
                  selectDays={selectDays}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomePage };
