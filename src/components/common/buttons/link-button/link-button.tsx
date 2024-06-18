import Link from "next/link"

type PropTypes = {
    link:string,
    placeholder:string,
}

const LinkButton: React.FC<PropTypes> = ({link, placeholder}) =>
    <Link className="link_button" href={link}>{placeholder}</Link>
export default LinkButton