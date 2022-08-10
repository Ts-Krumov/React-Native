export function genRegisterForm() {
  const formInfo = document.getElementById("form") as HTMLElement;
  formInfo.innerHTML = `
    <center>
    <div class="section"></div>

    <h5 class="indigo-text">Please, register your account</h5>
    <div class="section"></div>

    <div class="container" >
      <div class="z-depth-1 grey lighten-4 row" id="register-form" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

        <form class="col s12" method="post">
          <div class='row'>
            <div class='col s12'>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='email' name='email' id='email' />
              <label for='email'>Email</label>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='password' name='password' id='password' />
              <label for='password'>Password</label>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='text' name='username' id='username' />
              <label for='username'>Username</label>
            </div>
          </div>
        
          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='text' name='firstName' id='firstName' />
              <label for='firstName'>First Name</label>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='text' name='lastName' id='lastName' />
              <label for='lastName'>Last Name</label>
            </div>
          </div>

          <div class='row'>
          <div class='input-field col s12'>
            <input class='validate' type='url' name='picUrl' id='picUrl' />
            <label for='picUrl'>Picture Url</label>
          </div>
        </div>

        <div class='row'>
        <div class='input-field col s12'>
          <input class='validate' type='text' name='description' id='description' />
          <label for='description'>Description</label>
        </div>
        </div>

        <div class="input-field col s12">
        <select class="browser-default">
          <option value="" disabled selected>Gender</option>
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>
        </div>
          <br/>
          <center>
            <div class='row'>
              <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Register</button>
            </div>
          </center>
        </form>
      </div>
    </div>
    <a id="goToLogin">Already have an account? Log in instead.</a>
  </center>
      `;
    formInfo.querySelector('#goToLogin')!.addEventListener("click", () => genLoginForm())
    
  return formInfo;
}

export function genLoginForm() {
  const formInfo = document.getElementById("form") as HTMLElement;
  formInfo.innerHTML = `
    <center>
    <div class="section"></div>

    <h5 class="indigo-text">Please, log in to your account</h5>
    <div class="section"></div>

    <div class="container" id="login-form">
      <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

        <form class="col s12" method="post">
          <div class='row'>
            <div class='col s12'>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <i class="material-icons prefix">email</i>
              <input class='validate' type='email' name='email' id='email' />
              <label for='email'>Enter your email</label>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <i class="material-icons prefix">lock</i>
              <input class='validate' type='password' name='password' id='password' />
              <label for='password'>Enter your password</label>
          <br />
          <center>
            <div class='row'>
              <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Log in</button>
            </div>
          </center>
        </form>
      </div>
    </div>
    <a href="">Create an account</a>
  </center>
      `;
  return formInfo;
}
