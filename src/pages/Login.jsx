import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");
        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            setError({...error, login: errorCode});
        });
    };

    return (
        <div className="bg-gray-300 min-h-screen flex justify-center items-start">
            <div className="card bg-gray-300 w-full mx-auto rounded-2xl">
                <h2 className="font-bold text-center text-3xl pt-5">Login your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required name="email"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required name="password"/>
                        {
                            error.login && (
                                <label className="label text-sm text-red-600">
                                    {error.login}
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold pb-5">Don't Have An Account? <Link className="text-red-500" to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;