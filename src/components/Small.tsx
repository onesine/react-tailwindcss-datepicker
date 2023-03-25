
type Props = {
    children:string;
    className:string;
}
const Small:React.FC<Props> = ({children, className})=>{
    return <small className={className}>{children}</small>
}

export default Small;
