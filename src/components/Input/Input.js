import "./Input.scss";
import { useState } from "react";
import { useEffect } from "react";

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
    onSaveInputData,
    ...props 
    }) => {
    const [input,setInput] = useState('')
    
	const inputType = hidden ? "password" : "text";

    const inputTypeClass = type;
    const inputClassName = `${inputTypeClass}-input ${customInputClass}`;

    const labelClass=`${customLabelClass} label-text`

    const saveInput = (event)=>{
        setInput(event.target.value)
    }

    useEffect(()=>{
        onSaveInputData(input)
    }
    ,[input,onSaveInputData])

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
                    onChange={e => saveInput(e)}
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