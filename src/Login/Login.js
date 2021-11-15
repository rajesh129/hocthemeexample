import classNames from 'classnames';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './Login.scss';

const Login = ({theme="default" }) => {
    return (
        <div className={classNames("login__wrapper", theme)}>
            <Input type="text" id="username" fieldName="Username" />
            <Input type="password" id="password" fieldName="Password" />
            <Button buttonName="Submit" id="login-submit" />
        </div>
    )
}

export default Login;