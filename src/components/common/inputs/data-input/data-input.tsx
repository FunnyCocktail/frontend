import { FC } from "react"
import styles from './data-input.module.scss'

type PropTypes = {
    name:string,
    value:string,
    placeholder:string,
    type:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const DataInput: FC<PropTypes> = ({name, value, placeholder, onChange, type}) => {
    return <input
    name={name}
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
    className={`${styles.input}`}/>
}

export default DataInput