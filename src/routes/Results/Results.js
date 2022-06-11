import "./Results.scss";
import Button from "components/Button/Button";
import Box from "components/Box/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Results = () => {
  const { id } = useParams();

  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log(id);
    fetch(`http://188.121.208.146:8000/result/game/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }, []);

  return (
    <div className="flex flex-v height100h">
      <div customStyle="main-div">
        <Box
          title="RESULTS"
          customStyle="header-padding"
          contentCustomStyle="container-height"
        >
          <div className="flex-h space-between">
            <div className="flex-v">
              {results.map((data) => (
                <span className="label-class label-text">{data.user.name}</span>
              ))}
            </div>
            <div className="flex-v">
              {results.map((data) => (
                <span className="points-color"> {data.points}</span>
              ))}
            </div>
            <div className="flex-v">
              {results.map((data) => (
                <span className="label-class label-text">
                  {data.time} seconds / {data.mistakes} mistakes
                </span>
              ))}
            </div>
          </div>
        </Box>
      </div>
      <div>
        <Button
          title="filled-btn"
          text="BACK"
          customStyle="my-button-left"
        ></Button>
        <Button
          title="filled-btn"
          text="PLAY AGAIN"
          customStyle="my-button-right"
        ></Button>
      </div>
    </div>
  );
};

export default Results;
