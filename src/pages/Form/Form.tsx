import "./Form.css";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextEncoder } from "text-encoding";

const IP_ADDRESS = "http://192.168.0.234";

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Form: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required("Fullname is required")
      .matches(/.*/, "Only letters and whitespace allowed"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf(
      [false],
      "You must accept the terms to sign up."
    ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    const packet = JSON.stringify(data, null, 2);
    const encodedPacket = new TextEncoder("utf-8", {
      NONSTANDARD_allowLegacyEncoding: false,
    }).encode(packet);

    fetch(`${IP_ADDRESS}/signup`, {
      headers: {
        "Content-Type": "application/octet-stream"
      },
      method: "POST",
      mode: "cors",
      body: encodedPacket,
    });
  };

  return (
    <div className="register-form">
      <h1> Sign Up </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullname")}
            className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="text"
            {...register("confirmPassword")}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            {...register("acceptTerms")}
            className={`form-check-input ${
              errors.acceptTerms ? "is-invalid" : ""
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have bread and agreed to the{" "}
            <a href="/terms-and-conditions" >
              Terms
            </a>
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
          <h5> *IF YOU CLICK REGISTER THAT MARKS YOUR TIME AND YOU MUST TURN YOUR LAPTOP AROUND</h5>
        </div>
      </form>
    </div>
  );
};

export default Form;
