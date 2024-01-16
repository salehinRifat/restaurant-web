import './login.css';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
const Login = () => {
    const [validate, setValidate] = useState(false);
    const captchaInput = useRef();
    const handleLogin = e => {
        e.preventDefault();
        const pass = e.target.password.value;
        const email = e.target.email.value;

    }
    const handleCaptcha = () => {
        const user_captcha_value = captchaInput.current.value;
        const isTrue = validateCaptcha(user_captcha_value)
        if (isTrue) {
            setValidate(isTrue);
        } else {
            setValidate(false)
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div>
            <div className="hero min-h-screen sectionCover">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-lg">
                        <h1 className='text-center text-2xl font-bold'>Login</h1>
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <div>
                                    <LoadCanvasTemplate />
                                </div>
                                <div>
                                    <input type="password" placeholder="Type Here" onBlur={handleCaptcha} name="captcha" ref={captchaInput} className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className={`btn btn-primary ${validate || 'btn-disabled'}`}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;