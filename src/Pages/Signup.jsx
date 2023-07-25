import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [password, confirmPassword] = watch(["Password", "Confirm Password"]);
  useEffect(() => {
    if(!!password && !!confirmPassword && (password !== confirmPassword)) {
      setError("Confirm Password",{type: "custom", message: "Password and confirm password do not match"});
    } else {
      clearErrors("Confirm Password");
    }
  }, [password, confirmPassword, setError]);
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
    <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} className="input" />
    {!!errors["First name"] && (
      <p>{errors["First name"]?.message?.toString() || "This is required"}</p>
    )}
    <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} className="input" />
    {!!errors["Last name"] && (
      <p>{errors["Last name"]?.message?.toString() || "This is required"}</p>
    )}
    <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} className="input" />
    {!!errors.Email && (
      <p>{errors.Email?.message?.toString() || "This is required"}</p>
    )}
    <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} className="input" />
    {!!errors["Mobile number"] && (
      <p>{errors["Mobile number"]?.message?.toString() || "This is required"}</p>
    )}
    <input type="password" placeholder="Password" {...register("Password", { max: 30, min: 6, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/i })} className="input" />
    {!!errors.Password && (
      <p>{errors.Password?.message?.toString() || "Invalid"}</p>
    )}
    <input type="password" placeholder="Confirm Password" {...register("Confirm Password", { max: 30, min: 6, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/i })} className="input" />
    {!!errors["Confirm Password"] && (
      <p>{errors["Confirm Password"]?.message?.toString() || "Invalid"}</p>
    )}
     {password !== confirmPassword && (
      <p>Password and confirm password do not match</p>
    )}
    <input type="submit" className="submit-input" />
  </form>
  );
}
