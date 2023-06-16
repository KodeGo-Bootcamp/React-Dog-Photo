import React from "react";
import styles from './sass/modules/app.module.scss'
import { Join } from "./util/JoinClasses";

export default function Start(){
    return (
        <div>
            <h1 className={Join([styles.pad,styles['dark-cyan'],styles['font-weight-400']])}>Hello World</h1>
            <img src="/src/images/react.png" alt="react-logo"></img>
        </div>
    )
}