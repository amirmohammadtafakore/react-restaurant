import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom"
import { ThemeContext } from "../App";
import clsx from "clsx";
import styles from '../styles/Header.module.css';

export default function Header() {

    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const handleSearch = (event) => {
        console.log(event.target.value)
    }

    return (
        <div className={styles.headerWrapper}>
            <nav className={clsx(styles.navContainer, { 'bg-res-300': theme === 'light' })}>
                <h1 className={clsx('text-5xl text-slate-200', { 'text-slate-900': theme === 'light' })}>
                    <span className="text-6xl text-res-400">R</span>estaurant</h1>

                <input onChange={handleSearch} 
                className={clsx(styles.searchInput, { 'bg-res-400 placeholder:text-res-200': theme === 'light' })} type="text" placeholder="Search Foods" />

                <ul className={clsx(styles.listContainer, { 'text-res-200 bg-res-400': theme === 'light' })}>
                    <li className={clsx(styles.listItem, { 'border-res-100': theme === 'light' })}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className={clsx(styles.listItem, { 'border-res-100': theme === 'light' })}>
                        <Link to={"/foods"}>Foods</Link>
                    </li>
                    <li className={clsx(styles.listItem, { 'border-res-100': theme === 'light' })}>
                        <Link to={"/cart"}>Cart</Link>
                    </li>
                    <li className={clsx("p-4", { 'border-res-100': theme === 'light' })}>
                        <Link to={"/aboutus"}>About Us</Link>
                    </li>
                </ul>
                
                <button className={clsx(styles.themeButton, { 'bg-res-400 , text-res-100': theme === 'light' })} onClick={changeTheme}>
                    {theme === 'light' ? 'DarkMode' : 'LightMode'}
                </button>
            </nav>
        </div>
    )
}