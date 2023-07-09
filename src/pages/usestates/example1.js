import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function ExampleOne() {

    const [number, setNumber] = useState(1);

    const textInRef = useRef(); 

    //need useref to run data validation
    useEffect( ()=> {
        console.log("use effect log - number has changed ");
    }, [number]);

 // fetch data frm db and disply in view
    useEffect( ()=> {
        console.log("use effect log - executed once when component is mounted ");
    }, []);


    useEffect( ()=> {
        console.log("use effect log - executed once when component is mounted ");
    }, []);


    useEffect( ()=> {
        console.log("use effect log - executed everytime component rerenders (when ever state var change)  ");

        console.log("product name = " , textInRef.current.value);
    });

    const handeMultiply = () => {

        setNumber(number * textInRef.current.value)
    }


    return (
        <div>
            <button onClick={() => setNumber(number+1)}>Increment</button>
            <button onClick={() => setNumber(number-1)}>Decrement</button>
            <button onClick={handeMultiply}>Multiply</button>
            <h1>{number}</h1>

            <hr/>
            

            <div className={styles.input}>
              <div className={styles.label}>Product Name</div>
              <input type="text" ref={textInRef} />
            </div>
            <hr/>


            
        </div>
    )

}