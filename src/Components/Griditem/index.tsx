import { Level } from "../../helpers/imc";
import styles from './Gridtem.module.css';
import upImagae from '../../assents/up.png';
import downImage from '../../assents/down.png';

type Props = {
    item: Level;
}
export const GridItem = ({item}: Props)=> {
    
   return (
    <div className= {styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridICon}>
                <img src={item.icon === 'up'? upImagae : downImage} alt= ""  width ="30"/>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

                    {item.yourImc &&
                        <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m<sup>2</sup></div>
                    
                    }

            <div className={styles.gridInfo}>

                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>


    </div>
   );
}