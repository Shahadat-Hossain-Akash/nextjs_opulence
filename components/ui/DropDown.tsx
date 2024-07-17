'use client'
import React from 'react'
import Select, { components } from "react-select";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const colourStyles = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: "#1e1e1e",
        padding: 8,
        borderRadius: 16,
        boxShadow: "none",
        border: "none",
    }),
    menuList: (styles: any) => ({
        ...styles,
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        overflowY: "auto",
        borderRadius: 12,
        backgroundColor: "#1e1e1e",
        color: "white",
    }),
    menu: (base: any) => ({
        ...base,
        zIndex: 10,
        borderRadius: 16,
        boxShadow: "none",
        backgroundColor: "transparent",
    }),

    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
        return {
            ...styles,
            padding: 8,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? "#0d0d0d"
                    : isFocused
                        ? "#0d0d0d"
                        : undefined,
            cursor: isDisabled ? "not-allowed" : "default",
            borderRadius: 8,
        };
    },
    input: (styles: any) => ({ ...styles, color: "white" }),
    placeholder: (styles: any) => ({ ...styles, color: "white" }),
    singleValue: (styles: any) => ({ ...styles, color: "white" }),
};

const DropdownIndicator = (props: any) => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                {props.selectProps.menuIsOpen ? <ChevronUpIcon className='size-5 stroke-1' /> : <ChevronDownIcon className='size-5 stroke-1' />}
            </components.DropdownIndicator>
        )
    );
};
export default function DropDown({ options }: any) {
    return (
        <div>
            <Select
                defaultValue={options[0]}
                options={options}
                styles={colourStyles}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator
                }}

            />
        </div>
    )
}
