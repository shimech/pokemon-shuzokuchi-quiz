import React from "react";
import { Radar } from "react-chartjs-2";
import { pokemonInformation } from "../../Utils.js";

const radarOption = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scale: {
    angleLines: {
      color: "rgba(150, 150, 150, 0.5)"
    },
    gridLines: {
      color: "rgba(150, 150, 150, 0.5)"
    },
    pointLabels: {
      fontSize: 20
    },
    ticks: {
      beginAtZero: true,
      stepSize: 50,
      max: 150,
      fontSize: 10
    }
  }
};

const radarSize = {
  width: 500,
  height: 500
};

const generateData = pokemon => {
  return {
    labels: [
      `HP: ${pokemon.status.hitpoint}`,
      `こうげき: ${pokemon.status.attack}`,
      `ぼうぎょ: ${pokemon.status.block}`,
      `すばやさ: ${pokemon.status.speed}`,
      `とくぼう: ${pokemon.status.defense}`,
      `とくこう: ${pokemon.status.contact}`
    ],
    datasets: [
      {
        backgroundColor: "rgba(104, 59, 255, 0.7)",
        borderColor: "rgba(104, 59, 255, 1)",
        pointRadius: 0,
        data: [
          pokemon.status.hitpoint,
          pokemon.status.attack,
          pokemon.status.block,
          pokemon.status.speed,
          pokemon.status.defense,
          pokemon.status.contact
        ]
      }
    ]
  };
};

class StatusRadar extends React.Component {
  render() {
    const pokemon = pokemonInformation[this.props.id];

    return (
      <div className="StatusRadar">
        <Radar
          data={generateData(pokemon)}
          options={radarOption}
          width={radarSize.width}
          height={radarSize.height}
        />
      </div>
    );
  }
}

export default StatusRadar;
