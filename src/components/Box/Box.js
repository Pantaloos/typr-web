import "./Box.scss";
import Text from "components/Text/Text";

const Box = ({ title, children, customStyle, contentCustomStyle }) => {
  const titleCustomStyle = `${customStyle} box-title`;
  const ContentCustomStyle = `${contentCustomStyle} w-100 h-100 box-container`;
  return (
    <div className="w-100 h-100">
      <Text type="basic" customStyle={titleCustomStyle}>
        {title}
      </Text>
      <div className={ContentCustomStyle}>{children}</div>
    </div>
  );
};

export default Box;
