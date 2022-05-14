import "./Button.scss";

const Button = ({
	type = "action",
	textType = "basic",
	customStyle = "",
	onClick,
	text = "",
	value = "",
	children,
	...props
}) => {
	const buttonTypeClass = type;
	const textTypeClass = textType;
	const buttonClassName = `${buttonTypeClass}-btn ${textTypeClass}-text ${customStyle}`;

	const handleClick = e => {
		if (onClick) onClick(value);
	};

	return (
		<button {...props} className={buttonClassName} onClick={handleClick}>
			{text ? text : children}
		</button>
	);
};

export default Button;
