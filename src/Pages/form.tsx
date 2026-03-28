 import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Header from "../Components/Header";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
  role: string;
};

export default function Form() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>();
  
  // Snackbar state
  const [open, setOpen] = useState(false);

  function onSubmit(data: FormValues) {
    console.log("Form submitted ✅", data);
    setOpen(true); // show success snackbar
  }

  function handleClose(_event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") return; // don't close when clicking away
    setOpen(false);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}  
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
    >
           <Header title="Create User" subtitle="Create a New User Profile"/>
       
      <Stack direction={{ xs: "column", sm: "row" }} sx={{ flex: 1, gap: 1 }}>
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 3, message: "First name must be at least 3 characters" }
          })}
        />

        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          {...register("lastName", {
            required: "Last name is required",
            minLength: { value: 3, message: "Last name must be at least 3 characters" }
          })}
        />
      </Stack>

      {/* Email */}
      <TextField
        label="Email"
        variant="filled"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email format" }
        })}
      />

      {/* Contact Number */}
      <TextField
        label="Contact Number"
        variant="filled"
        error={!!errors.contact}
        helperText={errors.contact?.message}
        {...register("contact", { required: "Contact number is required" ,pattern: {
  value: /^[0-9]{11}$/,
  message: "Phone number must be exactly 11 digits"
}})}
      />

      {/* Address 1 */}
      <TextField
        label="Address 1"
        variant="filled"
        error={!!errors.address1}
        helperText={errors.address1?.message}
        {...register("address1", { required: "Address 1 is required" })}
      />

      {/* Address 2 */}
      <TextField
        label="Address 2"
        variant="filled"
        error={!!errors.address2}
        helperText={errors.address2?.message}
        {...register("address2", { required: "Address 2 is required" })}
      />

   
      <Controller
        name="role"
        control={control}
        rules={{ required: "Role is required" }}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors.role}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select labelId="role-label" {...field}>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </Select>
            {errors.role && (
              <Box sx={{ color: "error.main", fontSize: "0.75rem", mt: 0.5 }}>
                {errors.role.message}
              </Box>
            )}
          </FormControl>
        )}
      />

      {/* Submit button */}
      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" variant="contained">Create New User</Button>
      </Box>

      {/* Snackbar */}
      <Snackbar open={open} anchorOrigin={{vertical:"top",horizontal:"right"}} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          User created successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
