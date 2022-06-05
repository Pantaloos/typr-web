import "./Input.scss";

const Input = ({
    type = "", 
    containerStyle = "",
    placeholder = "",
    hidden, 
    maxLength = "48",
    inputRef,
    label = "",
    customLabelClass="",
    customInputClass="",
    ...props 
    }) => {
	const inputType = hidden ? "password" : "text";

    const inputTypeClass = type;
    const inputClassName = `${inputTypeClass}-input ${customInputClass}`;

    const labelClass=`${customLabelClass} label-text`

    if(type === "single")
        return (
            <div className={ containerStyle + "-input-container"}>
                {
                    label !=="" &&
                    <text className={labelClass}>
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