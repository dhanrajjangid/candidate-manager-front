import React, { useEffect, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Import common components
import {
  Form,
  FieldContainer,
  ErrorMessage
} from './StyledComponents'

import {
  UnderlinedTextField,
  ContainedButton,
} from "@/components/Common/FormInputs";
import { useProfile } from "../profileApi";



const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
});

const UserForm = () => {
  const player_id = JSON.parse(localStorage.getItem('user'))?.player_id
  const {getPlayerById, updatePlayer} = useProfile()
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    updatePlayer(player_id, data)
  };

  const fields = [
    {
      name: "name",
      placeholder: "Name",
      validation: validationSchema.fields.name,
    },
    {
      name: "email",
      placeholder: "Email",
      validation: validationSchema.fields.email,
    },
    {
      name: "phoneNumber",
      placeholder: "Phone Number",
      validation: validationSchema.fields.phoneNumber,
    },
    {
      name: "city",
      placeholder: "City",
      validation: validationSchema.fields.city,
    },
    {
      name: "state",
      placeholder: "State",
      validation: validationSchema.fields.state,
    },
    
  ];

  useEffect(()=> {
    getPlayerDetails()
  }, [player_id])

  const getPlayerDetails = async () => {
    const details = await getPlayerById(player_id)
    if (details?.player) {
        setValue('name', details?.player?.name);
        setValue('email', details?.player?.email);
        setValue('phoneNumber', details?.player?.phoneNumber);
        setValue('city', details?.player?.city ?? "");
        setValue('state', details?.player?.state);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => {
        return (
          <FieldContainer>
            <Controller
              name={item.name}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <UnderlinedTextField
                    {...field}
                    placeholder={item.placeholder}
                  />
                  {errors[field.name] && (
                    <ErrorMessage>{errors[field.name].message}</ErrorMessage>
                  )}
                </>
              )}
            />
          </FieldContainer>
        );
      })}
      <ContainedButton type="submit">Submit</ContainedButton>
    </Form>
  );
};

export default UserForm;
