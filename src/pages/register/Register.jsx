import './register.css';
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                toast("Succesfully Registered!");
            })
            .catch(error => {

            })
    }
    return (
        <div>
            <div className="hero min-h-screen sectionCover">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-lg">
                        <h1 className='text-center text-2xl font-bold'>Register</h1>
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-sm text-red-500 mt-2'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-sm text-red-500 mt-2'>email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/ })} type="password" placeholder="password" name="password" className="input input-bordered" required />
                                {errors.password && <span className='text-sm text-red-500 mt-2'>Your pass must have one digit, small and capital letter, special character and  at least 6 characters long. </span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className={'btn btn-ghost'}>Register</button>
                            </div>
                            <Link to={'/login'} className='text-yellow-700'>Already Registered ? Login</Link>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;