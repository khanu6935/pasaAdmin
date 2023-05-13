import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { RxArrowTopRight } from "react-icons/rx";
import { renderToString } from "react-dom/server";

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

const ApexChart = () => {
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
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "white",
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

export { ApexChart };
