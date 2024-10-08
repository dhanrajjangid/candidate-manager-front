import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogin } from "./apiFunctions";
import { Container, Title, StyledForm, StyledTextField, StyledButton, SignUpLink } from "./StyledComponents";
import * as Yup from 'yup'; // Import Yup
import { yupResolver } from '@hookform/resolvers/yup';
import {actions as authActions} from '@/redux/slices/authSlice'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  const login = useLogin();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(authActions.login(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Use YupResolver with validationSchema
  });

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container>
      <Title>Sign In</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          {...register("username")}
          placeholder="Username"
          type="text"
        />
        {errors.username && <span>{errors.username.message}</span>}
        <StyledTextField
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <StyledButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </StyledButton>
      </StyledForm>
      <Typography>
        Do not have an account?{" "}
        <SignUpLink onClick={() => navigate("/signup")}>Sign Up</SignUpLink>{" "}
        here
      </Typography>
    </Container>
  );
};

export default LoginForm;
