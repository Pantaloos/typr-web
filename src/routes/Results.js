import "./Results.scss";
import Button from "components/Button/Button";
import { Box } from "./Home";

const Results = () => {
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
              <span className="label-class label-text">VORDTY</span>
              <span className="label-class label-text">LUX</span>
              <span className="label-class label-text">HULU</span>
              <span className="label-class label-text">LEVANTE</span>
            </div>
            <div className="flex-v">
              <span className="points-color"> 100 points</span>
              <span className="points-color"> 200 points</span>
              <span className="points-color"> 300 points</span>
              <span className="points-color"> 400 points</span>
            </div>
            <div className="flex-v">
              <span className="label-class label-text">
                65 seconds / 3 mistakes
              </span>
              <span className="label-class label-text">
                60 seconds / 2 mistakes
              </span>
              <span className="label-class label-text">
                50 seconds / 1 mistakes
              </span>
              <span className="label-class label-text">
                40 seconds / 0 mistakes
              </span>
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
