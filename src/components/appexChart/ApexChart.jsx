import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { RxArrowTopRight } from "react-icons/rx";
import { renderToString } from "react-dom/server";
import { useEffect } from "react";

function Labelchart({ playerCount }) {
  return (
    <div class="  w-[8.5rem] rounded-md bg-secondry px-4 py-3 text-white">
      <p class="text-md font-[Barlow]">Users</p>
      <div class="flex items-center space-x-1 text-xl font-bold">
        <span className="font-[Barlow]">{playerCount}</span>
        <span class="flex h-5 w-12 items-center justify-center rounded-2xl bg-yellow-500 font-[Barlow] px-3 text-center text-xs mr-2">
          24
          <RxArrowTopRight color="black" />
        </span>
      </div>
    </div>
  );
}

const ApexChart = ({ playerCount, playerMonth }) => {
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
      categories: playerMonth,

      labels: {
        rotate: -45,
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
        return renderToString(<Labelchart playerCount={playerCount} />);
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
      data: playerCount,
    },
  ]);

  useEffect(() => {
    setOptions({
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
        categories: playerMonth,

        labels: {
          rotate: -45,
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
          return renderToString(<Labelchart playerCount={playerCount} />);
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

    setSeries([
      {
        name: "Desktops",
        data: playerCount,
      },
    ]);
  }, [playerCount, playerMonth]);

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
