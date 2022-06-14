import "./Rule.scss";
import Text from "components/Text/Text";
import Dropdown from "components/Dropdown/Dropdown";
import Switch from "components/Switch/Switch";

const Rule = ({ value, onValueChange, data, ...props }) => {
  const { name, type, key } = data;
  const getComponent = () => {
    let text;
    switch (type) {
      case "multiple":
        const { values } = data;
        text = values.find((it) => it.value === value).text;
        return (
          <Dropdown
            initialTitle={text}
            items={values}
            onValueChange={(value, text) => onValueChange(key, value, text)}
          ></Dropdown>
        );
      case "switch":
        const { options } = data;
        text = Object.values(options).find((it) => it.value === value).text;
        return (
          <Switch
            value={value}
            options={options}
            onValueChange={(value, text) => onValueChange(key, value, text)}
          ></Switch>
        );
      default:
        break;
    }
  };

  return (
    <div className="rule-container">
      <Text customStyle="rule-text"> {name}</Text>
      {getComponent()}
    </div>
  );
};

export default Rule;
