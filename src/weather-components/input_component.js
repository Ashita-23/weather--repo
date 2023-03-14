import React, { useEffect, useState } from "react";

const Input_Data = () => {
  // state for showing data
  const [showData, setNewShowData] = useState(null);
  // state for getor setting new data
  const [getInput, setNewInput] = useState("Faridabad");

  useEffect(() => {
    const weatherApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${getInput}&units=metric&appid=adc86d58c9cf0f57988afee521754dc7`;
      const getRespons = await fetch(url);
      const passResponsJson = await getRespons.json();

      setNewShowData(passResponsJson);
    };

    weatherApi();
  }, [getInput]);

  return (
    <>
      <div className="input_outer">
        <div className="icon_Dis">
          <i className="fa-solid fa-sun"></i>
        </div>
        <div>
          <div className="search_box">
            <input
              type={"text"}
              placeholder={"Search"}
              className="search_bar"
              value={getInput}
              onChange={(event) => {
                setNewInput(event.target.value);
              }}
            />
            <span>
              <i className="fa-solid fa-magnifying-glass input_icon"></i>
            </span>
          </div>
          <h2 className="dis_search">{getInput}</h2>
        </div>

        {!showData ? (
          <p className="error-mss">  Data Not Found !</p>
        ) : (
          <>
            <div className="data_output">
              <h3>
                city <span className="show_input">{showData.name}</span>
              </h3>
              <h3>
                temprature <span className="show_input">{showData.main.temp}</span>
              </h3>
              <h3>
                weather
                <span className="show_input">{showData.weather[0].main}</span>
              </h3>
              <h3>
                wind speed <span className="show_input">{showData.wind.speed}</span>
              </h3>
            </div>
          </>
        )}

      </div>
    </>
  );
};

export default Input_Data;
