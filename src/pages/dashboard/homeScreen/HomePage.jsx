import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Header, NavBoxes } from "../../../components";

import { renderToString } from "react-dom/server";

import { DropdownMonths } from "../../../components/dropdowns/MonthlyFilterDropdown";
import { DropdownUsers } from "../../../components/dropdowns/UsersDropdown";
import { RxArrowTopRight } from "react-icons/rx";

function Labelchart() {
  return (
    <div class="  w-[8.5rem] rounded-md bg-secondry px-4 py-3 text-white">
      <p class="text-md font-[Barlow]">Users</p>
      <div class="flex items-center space-x-1 text-xl font-bold">
        <span className="font-[Barlow]">2500</span>
        <span class="flex h-5 w-12 items-center justify-center rounded-2xl bg-yellow-500 font-[Barlow] px-3 text-center text-xs mr-2">
          24
          <RxArrowTopRight color="black" />
        </span>
      </div>
    </div>
  );
}

export const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "area",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      align: "left",
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        rotate: -45, // rotates the x-axis labels by -45 degrees
        style: {
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      custom: function (params) {
        return renderToString(<Labelchart />);
      },
    },
    markers: {
      size: 7,
      strokeColors: "yellow",
      strokeWidth: 5,
    },
    stroke: {
      curve: "smooth",
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Desktops",
      data: [100, 300, 700, 200, 900, 100, 300, 1100, 900, 600, 1100, 200],
    },
  ]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="516px"
      />
    </div>
  );
};

function HomePage() {
  return (
    <>
      <div className="bg-primary h-screen flex flex-col">
        <div className="h-[7rem]">
          <Header />
        </div>

        <div className="bg-primary lg:px-10 px-0 py-10 flex-grow flex flex-col">
          <h3 className="text-textWhite px-5   pb-5 sm:pb-0 lg:px-0  font-semibold text-2xl  font-[Barlow]">
            Statistics
          </h3>
          <div className="flex flex-wrap md:flex-nowrap    gap-4 overflow-x-scroll lg:px-0 px-5 customClass w-full">
            <NavBoxes
              title="Total Users"
              counts="50,002"
              ratio="24"
              duration="Overall"
            />
            <NavBoxes
              title="New Distributors"
              counts="500"
              ratio="24"
              duration="Last 3 Months"
            />
            <NavBoxes
              title="Subscribers"
              counts="5000"
              ratio="24"
              duration="This Month"
            />
            <NavBoxes
              title="Player Signup"
              counts="5000"
              ratio="24"
              duration="This Month"
            />
            <NavBoxes
              title="Distributor Signup"
              counts="5000"
              ratio="24"
              duration="This Month"
            />
          </div>

          <div
            className="rounded-md my-5 mx-5 lg:mx-0"
            style={{ border: "2px solid #311A67", flexGrow: "1" }}
          >
            <div className="px-5 py-5 flex justify-between items-center flex-wrap space-y-2 sm:space-y-0">
              <h2 className="text-white text-2xl font-[Barlow]">Users</h2>
              <div className="flex  space-x-4 ">
                <DropdownUsers />
                <DropdownMonths />
              </div>
            </div>
            <div className=" px-2 h-[520px]">
              <ApexChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomePage };
