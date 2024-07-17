import React from 'react';

const CustomTile = ({ children, className } : Readonly<{
    children: React.ReactNode;
    className?: string,
}>) => {
    return (
        <div className={`w-full px-2 flex bg-[#1a1a1a] border-[1px] border-[#1e1e1e]/70 rounded-xl ${className}`}>
            {children}
        </div>
    );
};

const Left = ({ children, className }: Readonly<{
    children: React.ReactNode;
    className?: string,
}>) => {
    return (
        <div className={`flex w-full h-full flex-col ${className}`}>
            {children}
        </div>
    );
};

const Right = ({ children, className }: Readonly<{
    children: React.ReactNode;
    className?: string,
}>) => {
    return (
        <div className={`w-full flex items-center justify-end gap-4 ${className}`}>
            {children}
        </div>
    );
};

const Button = ({ children, className, onClick }: Readonly<{
    children: React.ReactNode,
    className?: string,
    onClick?: () => void
}>) => {
    return (
        <button className={`rounded-2xl p-2 ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

CustomTile.Left = Left;
CustomTile.Right = Right;
CustomTile.Button = Button;

export default CustomTile;
