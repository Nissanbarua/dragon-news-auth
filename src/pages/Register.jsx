
import { Link } from 'react-router-dom';

const Register = () => {
          return (
                    <div className="min-h-screen flex justify-center items-center text-center ">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
                      <h2 className="text-4xl font-semibold">Register your account</h2>
                      <form className="card-body">

                      <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            required
                          />
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Photo Url</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Photo url"
                            className="input input-bordered"
                            required
                          />
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                          />
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Password</span>
                          </label>
                          <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                          />
                          <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                            </a>
                          </label>
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-neutral " >Register</button>
                        </div>
                      </form>
                      <p className="text-center">
                        Already Have An Account ?
                        <Link to="/auth/login" className="text-red-500 font-semibold">
                         Login
                        </Link>
                      </p>
                    </div>
                  </div>
          );
};

export default Register;