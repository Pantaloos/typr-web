import "./Text.scss";

const Text = ({ type, customStyle = "", onClick, children }) => {
	const textClassName = `${type}-text ${customStyle}`;

	return (
		<span onClick={onClick} className={textClassName}>
			{children}
		</span>
	);
};

export default Text;
