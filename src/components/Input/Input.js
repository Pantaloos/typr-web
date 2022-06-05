import "./Input.scss";

const Input = ({
    type = "", 
    containerStyle = "",
    placeholder = "",
    hidden, 
    maxLength = "48",
    inputRef,
    label = "",
    ...props 
    }) => {
	const inputType = hidden ? "password" : "text";

    const inputTypeClass = type;
    const inputClassName = `${inputTypeClass}-input`;

    if(type === "single")
        return (
            <div className={ containerStyle + "-input-container"}>
                {
                    label !=="" &&
                    <text className="label-text">
                        {label}
                    </text>
                }
                <input
                    {...props}
                    ref={inputRef}
                    className = {inputClassName}
                    type={inputType}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
            </div>
        );
    else if(type === "multiple")
        return (
            <div className={ containerStyle + "-input-container"}>
                <div className="input-textarea-wrapper">
                    <textarea
                        {...props}
                        ref={inputRef}
                        className = {inputClassName}
                        type={inputType}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        );
};

export default Input;