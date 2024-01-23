import './register.css';
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen sectionCover">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-lg">
                        <h1 className='text-center text-2xl font-bold'>Register</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control mt-6">
                                <button className={'btn btn-ghost'}>Register</button>
                            </div>
                            <Link to={'/register'} className='text-yellow-700'>Already Registered ? Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;