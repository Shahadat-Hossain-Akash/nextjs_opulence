import React from 'react'

export const Card = ({ text, amount }: { text: string, amount: number }) => {
    const textRender = text.toLowerCase()
    let textColor;
    if (textRender === 'income') {
        textColor = "text-[#C6FF7E]";
    } else if (textRender === "expense") {
        textColor = "text-[#FF5251]";
    } else {
        textColor = "text-[#E8FF7E]";
    }
    return (
        <div className='w-full h-full flex flex-col bg-[#1a1a1a] rounded-xl p-2 min-h-52 gap-1'>
            <div className={`${textColor} text-3xl md:text-6xl`}>{text}</div>
            <span className={`text-4xl`}>৳{amount}</span>
        </div>
    )
}
