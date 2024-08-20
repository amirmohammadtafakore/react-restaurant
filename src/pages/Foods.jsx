import React, { useContext, useEffect, useMemo, useState } from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import clsx from "clsx";
import styles from "../styles/FoodsPage.module.css";

export default function Foods() {
    const [foods, setFoods] = useState([]);
    const {theme} = useContext(ThemeContext);

    async function getFood() {
        const data = await Axios.get("http://localhost:3131/foods/").then((res) => { setFoods(res.data) })
    }

    useEffect(() => {
        getFood()
    }, [])

    return (
        <div className={clsx(styles.mainContainer , { 'bg-slate-200':theme==='light'})}>
            <div className={clsx(styles.foodContainer , { 'bg-res-300':theme==='light'})}>
                <div className={styles.pageTitleBlock}>
                    <h1 className={styles.pageTitle}>Foods list</h1>
                </div>
                <div className={styles.foodsList}>
                    {
                        foods.map(food => (
                            <div key={food.id} className={styles.foodCard}>
                                <img src={food.image} alt={food.name} className="rounded-md h-48 " />
                                <div className="mt-4">
                                    <h1 className="text-lg uppercase font-bold">{food.name}</h1>
                                    <p className="mt-2 text-black text-xs ">{food.ingredients}</p>
                                    <p className="mt-2 text-black text-xl text-bold ">{food.price} Toman</p>
                                </div>
                                <button className={styles.foodCardButton}>
                                    <Link to={`/singlefood?ingredients=${food.ingredients}&name=${food.name}&price=${food.price}&image=${food.image}`}>Show Item</Link>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}