

export default function Login () {

    return(

	
    <div class="container-fluid ps-md-0">
        <div class="row g-0">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto">
                                <h3 class="login-heading mb-4">Welcome back!</h3>

                               
                                <form action="/login" method="post">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                        />
                                    
                                        <label for="email">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                  
                                  </div>
                                    <div class="form-check mb-3">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="rememberPasswordCheck"
                                        />

                                        <label
                                            class="form-check-label"
                                            for="rememberPasswordCheck"
                                        >
                                            Remember password
                                        </label>
                                    </div>

                                    <div class="d-grid">
                                        <button
                                            class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                                            type="submit"
                                        >
                                            Sign in
                                        </button>
                                        <a
                                            class="btn btn-lg btn-light btn-login text-uppercase fw-bold mb-2"
                                            href="/"
                                        >
                                            Back
                                        </a>
                                        <div class="text-center">
                                            <a class="small" href="#">Forgot password?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   

    )



}