import { FC } from "react";
import styles from './accept-button.module.scss'

type PropTypes = {
    placeholder:string,
    onClick:any
};

const AcceptButton: FC<PropTypes> = ({placeholder, onClick}) => 
    <div onClick={onClick} className={`${styles.button}`}>{placeholder}</div>
export default AcceptButton