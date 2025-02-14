import React, { useEffect, useRef } from 'react';
import { FormContainer } from './styles';
import Button from '../Button';
import { inputErrorsHandler } from '../../utils';

function Form({
    name,
    inputs,
    handleOnSubmit,
    ExtraHtml = undefined,
    action = '#',
    method = '',
    buttonLabel = 'Salvar',
    buttonIcon,
}) {
    function handleSubmit(event) {
        event.preventDefault();
        handleOnSubmit(event);
    }

    const inputRefs = useRef({});
    const errosRefs = useRef({});

    const handleEvents = (event) => {
        const input = event.target;
        const inputTarget = inputRefs.current[input.name];
        const errorField = errosRefs.current[input.name];
        inputErrorsHandler(inputTarget, errorField);
    };

    const handleInputTypeEvent = (input) => {
        if (
            input.type === 'email' ||
            input.type === 'file' ||
            input.type === 'date'
        ) {
            return {
                onChange: handleEvents,
            };
        }

        if (input.type === 'text' || input.type === 'password') {
            return {
                onBlur: handleEvents,
            };
        }

        if (input.type === 'number') {
            return {
                onChange: handleEvents,
            };
        }
        return {};
    };

    return (
        <FormContainer
            data-form={name}
            onSubmit={handleSubmit}
            action={action}
            method={method}
        >
            {inputs.map((input, index) => {
                if (input.type === 'select') {
                    return (
                        <div key={index} className="input__field">
                            {input.label && (
                                <>
                                    <label
                                        className="text"
                                        htmlFor={input.htmlFor}
                                    >
                                        {input.label}
                                    </label>
                                    <select
                                        name={input.name}
                                        required
                                        onChange={(event) => {
                                            const { name } = event.target;
                                            const input =
                                                inputRefs.current[name];
                                            const errorField =
                                                errosRefs.current[name];
                                            input &&
                                                inputErrorsHandler(
                                                    input,
                                                    errorField,
                                                );
                                        }}
                                        ref={(element) =>
                                            (inputRefs.current[input.name] =
                                                element)
                                        }
                                    >
                                        {input.options &&
                                            input.options.map(
                                                (option, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={option.value}
                                                        >
                                                            {option.label}
                                                        </option>
                                                    );
                                                },
                                            )}
                                    </select>
                                    <span
                                        className="error-message"
                                        name={input.name}
                                        ref={(element) =>
                                            (errosRefs.current[input.name] =
                                                element)
                                        }
                                    ></span>
                                </>
                            )}
                        </div>
                    );
                }
                return (
                    <div key={index} className="input__field">
                        {input.label && (
                            <label className="text" htmlFor={input.htmlFor}>
                                {input.label}
                            </label>
                        )}
                        <input
                            ref={(element) =>
                                (inputRefs.current[input.name] = element)
                            }
                            {...handleInputTypeEvent(input)}
                            className="input"
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            accept={input.accept}
                            required={input.required}
                        />
                        <span
                            name={input.name}
                            className="error-message"
                            ref={(element) =>
                                (errosRefs.current[input.name] = element)
                            }
                        ></span>
                    </div>
                );
            })}
            {ExtraHtml && <ExtraHtml />}
            <Button
                content={buttonLabel}
                Icon={buttonIcon}
                type="submit"
                styleType="primary"
                styleSize="default"
            />
        </FormContainer>
    );
}

export default Form;
