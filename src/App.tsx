import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assents/powered.png";
import leftArrowIMage from './assents/leftarrow.png';
import { GridItem } from "./Components/Griditem/";

import {levels, calculateImc, Level} from './helpers/imc';

const App = () => {

    const [heightField, setheightField] = useState<number>(0);
    const [weightFiled, setWeightField] = useState<number>(0);
    const [ toshow, setToShow] = useState<Level | null>(null);

    const handleCalculateButton = ()=> {
        if(heightField && weightFiled){
                setToShow(calculateImc(heightField, weightFiled));
        }else {
            alert('Digite todos os campos')
        }
    }

    const handleBackButton = ()=> {
        setToShow(null);
        setheightField(0);
        setWeightField(0);
    }

    return (

        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={poweredImage} alt="" width={150} />
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule o seu IMC</h1>
                    <p>IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
                    <input
                        type="number"
                        value={heightField > 0 ? heightField : ''}
                        onChange={e => setheightField(parseFloat(e.target.value))}
                        disabled={toshow ? true : false }
                        placeholder="Digite a sua altura. Ex: 1.5 (em mentros)">
                        
                    </input>

                    <input
                        type="number"
                        value={weightFiled > 0 ? weightFiled : ''}
                        onChange={e => setWeightField(parseFloat(e.target.value))}
                        disabled={toshow ? true : false }
                        placeholder="Digite seu Peso. Ex: 75.3 (em kg)">
                       
                    </input>

                    <button onClick={handleCalculateButton}disabled={toshow ? true : false }>Calcular</button>
                </div>

                <div className={styles.rightSide}>
                    {!toshow &&
                    <div className={styles.grid}>
                            {levels.map((item, key)=>(
                                <GridItem key= {key} item={item}/>
                                    
                            ))}
                    </div>
                    }

                    {toshow &&

                    <div className={styles.rightBig}>
                        <div className={styles.rightArrow} onClick={handleBackButton}>
                                <img  src={leftArrowIMage} alt= "" width={25}/>

                        </div>
                        <GridItem item={toshow}/>
                    </div>

                    }
                </div>

            
            </div>
        </div>

    );

}

export default App;