import { FC } from 'react'
import styles from './form.module.scss'

type PropTypes = {
    elements:JSX.Element,
}

const Form: FC<PropTypes> = ({elements}) => <form className={`${styles.form}`}>{elements}</form>
export default Form