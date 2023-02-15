import Style from './FetchError.module.css'

export const FetchError = ({content}) => {
    
    return(
        <div className={Style.FetchError}>
                {content}
        </div>
    )
}