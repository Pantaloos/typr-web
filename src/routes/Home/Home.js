import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Room from "components/Room/Room";
import Text from "components/Text/Text";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Box from "components/Box/Box";

function Home() {
  const navigate = useNavigate();

  const [rooms, updateRooms] = useState([]);
  const [code, updateCode] = useState("");
  const [nickname, updateNickname] = useState("");

  const codeInputHandler = (enteredInput) => {
    updateCode(enteredInput);
  };

  const nicknameInputHandler = (enteredInput) => {
    updateNickname(enteredInput);
  };

  function fetchRoomsHandler() {
    fetch(`http://${process.env.REACT_APP_API_URL}/room`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        updateRooms(data);
      });
  }

  useEffect(() => {
    fetchRoomsHandler();
  }, []);

  return (
    <div className="flex flex-v">
      <Text type="giant" customStyle="siteName">
        TYPR.IO
      </Text>
      <div className="flex flex-align-start">
        <div style={{ width: "360px", marginRight: "24px" }}>
          <Button
            type="filled"
            textType="large-b"
            customStyle="fw-700 w-100 mb-2"
            onClick={() => {
              if (nickname !== "") {
                fetch(`http://${process.env.REACT_APP_API_URL}/room`, {
                  method: "POST",
                  headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name: nickname }),
                })
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    navigate(`/room/${data.code}`, {
                      state: { nickname: nickname },
                    });
                  });
              }
            }}
          >
            PLAY
          </Button>
          <Box title="JOIN A ROOM">
            <div className="flex mb-4">
              <Input
                type="single"
                label="CODE"
                customLabelClass="label-class"
                customInputClass="input-code"
                containerStyle="mr-4"
                maxLength="5"
                onSaveInputData={codeInputHandler}
              />

              <Input
                type="single"
                label="NICKNAME"
                customLabelClass="label-class"
                customInputClass="input-code"
                maxLength="12"
                onSaveInputData={nicknameInputHandler}
              ></Input>
            </div>
          </Box>
          <Button
            type="filled"
            textType="large-b"
            customStyle="fw-700 w-100 mb-2"
            onClick={() => {
              if (nickname !== "" && code.length === 5) {
                navigate(`/room/${code}`, {
                  state: { nickname: nickname },
                });
              }
            }}
          >
            JOIN
          </Button>
        </div>

        <div style={{ width: "660px", height: "300px" }}>
          <Box title="AVAILABLE ROOMS" contentCustomStyle="scrolalble">
            {rooms.map((room) => (
              <Room
                roomName={room.name}
                key={room.id}
                numberOfPeople="??"
                customStyle="mt-4 background-dark-b"
                onClick={() => {
                  if (nickname !== "") {
                    navigate(`/room/${room.code}`, {
                      state: { nickname: nickname },
                    });
                  }
                }}
              ></Room>
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Home;
