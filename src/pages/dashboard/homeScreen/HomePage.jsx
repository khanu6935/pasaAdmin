import React, { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { Header, NavBoxes } from "../../../components";

export const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 300,
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
      text: "Product Trends by Month",
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
        return `<div class="flex ">
        hello world
        </div>`;
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
        height={300}
      />
    </div>
  );
};

function HomePage() {
  return (
    <>
      <div className="bg-primary h-screen">
        <Header />

        <div className="bg-primary lg:px-10 px-0 py-10">
          <h3 className="text-textWhite px-6 font-semibold text-xl">
            Statistics
          </h3>
          <div className="flex justify-around gap-4 overflow-x-scroll lg:px-0 px-5 customClass w-full">
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

          <div className="rounded-md" style={{ border: "2px solid #311A67" }}>
            <div>
              <h2>Users</h2>
            </div>
            <div>
              <ApexChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HomePage };
