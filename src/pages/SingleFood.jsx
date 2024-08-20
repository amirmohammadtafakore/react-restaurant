import React, { useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles/SingleFoodsPage.module.css";
import clsx from "clsx";
import { ThemeContext } from "../App";

export default function SingleFood() {
    const [urlQuery] = useSearchParams();
    const { theme } = useContext(ThemeContext)

    const { ingredients, name, price, image } = useMemo(() => {
        return { ingredients: urlQuery.get('ingredients'), name: urlQuery.get('name'), price: urlQuery.get('price'), image: urlQuery.get('image') };
    }, [urlQuery])

    return (
        <div className={clsx(styles.container, { 'bg-slate-200': theme === 'light' })}>
            <h1 className={clsx(styles.pageTitle, { 'text-res-100': theme === 'light' })}>Single Food Page</h1>
            <div className={clsx(styles.block, { 'bg-res-200': theme === 'light' })}>
                <div className="w-2/5">
                    <p className={styles.price}>{price} Toman</p>
                    <button className={styles.addCardButton}>Add to Cart</button>
                </div>
                <div className="mt-6 text-right 3/5">
                    <h1 className={styles.foodName}>{name}</h1>
                    <p className={styles.foodInFo}>{ingredients}</p>
                </div>
                <img src={image} alt="" className="h-min w-min " />
            </div>
            <Link to={"/foods"}>
                <h3 className={clsx(styles.backLink, { 'text-res-100': theme === 'light' })}>Back Foods page {"->"} </h3>
            </Link>
        </div>
    )
}