// RegistrationForm.js
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRegister } from "./apiFunctions"; // Assuming you have an api function for registration
import {
  Container,
  Title,
  StyledForm,
  StyledTextField,
  StyledButton,
  SignUpLink,
} from "@/view/Login/StyledComponents";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const register = useRegister(); // Assuming you have a custom hook for registration

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const {
    register: formRegister,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      await register(data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          {...formRegister("name")}
          placeholder="Name"
          type="text"
        />
        {errors.name && <span>{errors.name.message}</span>}
        <StyledTextField
          {...formRegister("email")}
          placeholder="Email"
          type="email"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <StyledTextField
          {...formRegister("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <StyledButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </StyledButton>
      </StyledForm>
      <Typography>
        Already have an account?{" "}
        <SignUpLink onClick={() => navigate("/login")}>Log In</SignUpLink> here
      </Typography>
    </Container>
  );
};

export default SignUp;
