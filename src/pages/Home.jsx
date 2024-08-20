import clsx from "clsx";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Cart() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={clsx("mx-auto h-screen p-12 w-4/5", { 'bg-res-200 text-res-400': theme === 'dark', 'bg-slate-100 text-res-100': theme === 'light' })}>
            <h1 className="text-3xl text-center">Home</h1>
            <h1 className="text-4xl text-center mt-48">Welcome to React Restaurant</h1>
        </div>
    )
}