import React, {FC} from 'react'

interface AlertProps{
 message:string;

}

 const Alert: FC<AlertProps> = ({message}) => {

    return (
        <div>
            <div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Alert;