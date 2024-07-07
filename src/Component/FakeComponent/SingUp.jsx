import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SetActive } from '../../Redux/SetActiveSlice';
import { useDispatch } from 'react-redux';
import { SetName } from '../../Redux/NameSlice';
const YourComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    if (!formData.email == "" && !formData.password == "" & !formData.rememberMe == false) {
      navigate('/');
      dispatch(SetActive(true));
      dispatch(SetName(formData.email))

    } else {
      alert("You Are not All Form Fill up ")
    }
  };

  return (
    <div className="SingUpCol col-md-10 mx-auto col-lg-5 ">
      <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input
              type="checkbox"
              value="remember-me"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" >Sign up</button>
        <hr className="my-4" />
        <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
      </form>
    </div>
  );
};

const SingUp = () => {
  return (
    <>

      <div className="SingUpCol container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3"> Sign-up Here 👉<br />
              For Flavoro Foods </h1>
            <p className="col-lg-10 fs-4">
              <span style={{ color: "gray" }}>All Form Fillup Is Mandatory For Sign-up   --</span><br />
              You 'eat with our eyes' isn't just a saying. Chefs have taken this to an all-new level with perfect food presentations. And if you're doing this at your restaurant, don't forget to flaunt it! Artsy pictures of food can attract orders from across the town. Some added tips to enhance your images are to shoot in natural light, use a neutral background, and a good balance of colors.

            </p>
          </div>
          <YourComponent />
        </div>
        <div className="   b-example-divider mb-0"></div>
        <div className="bg-dark text-secondary px-4 py-5 text-center">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-white">Hühner Salat  Is Currently is not Available </h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">Hühner Salat "Winzer Art"
                Oven roasted Chicken tossed with fresh grapes, tart green apples, juicy mandarin orange filets, poached pear, zesty lingonberries, crisp Romaine lettuce, and our low-fat yogurt ranch dressing</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider mb-0"></div>
      </div>
    </>
  );
};

export default SingUp;
