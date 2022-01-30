export default function Button(props: buttonProps){
    return (
        <button type={props.type} className="btn btn-primary"
        disabled={props.disabled}
        onClick={props.OnClick}
        >{props.children}</button>
    )
}

interface buttonProps{
    children: React.ReactNode,
    OnClick?(): void;
    type: "button" | "submit";
    disabled: boolean;

}

Button.defaultProps = {
    type: "button",
    disabled: false
}