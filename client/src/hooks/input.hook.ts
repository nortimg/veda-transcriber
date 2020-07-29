import { IUseTextInputProps } from "../helpers"
import { TextInputAction } from "../redux/redux.helpers"

export const useTextInput = <P extends IUseTextInputProps>(type: TextInputAction, props: P) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { value } = event.target
    props.textInputHandler(type, {
        [event.target.name]: value
    })
}