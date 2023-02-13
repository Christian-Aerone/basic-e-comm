import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const AddItem = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    initialValue || {
      id: "",
      title: "",
      price: "",
      description: "",
    }
  );

//   const schema = Joi.object({
//     id: Joi.string().min(2).max(100).required(),
//     title: Joi.string().min(3).max(20).required(),
//     price: Joi.string().min(3).max(20).required(),
//     description: Joi.string().min(6).max(500).allow("").optional(),

//   });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
    navigate("/");
  };

//   const handleChange = ({ currentTarget: input }) => {
//     setForm({
//       ...form,
//       [input.id]: input.value,
//     });

//     // const { error } = schema
//     //   .extract(input.id)
//     //   .label(input.id)
//     //   .validate(input.value);

// //     if (error) {
// //       setErrors({ ...errors, [input.id]: error.details[0].message });
// //     } else {
// //       delete errors[input.id];
// //       setErrors(errors);
// //     }
// //   };

// //   const isFormInvalid = () => {
// //     const result = schema.validate(form);

// //     console.log(result);

// //     return !!result.error;
// //     // console.log(result);
//   };

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <Grid item xs={6}>
        <Card>
          <CardHeader title={`${initialValue ? "Edit" : "New"} Item`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="id"
                  error={!!errors.id}
                  helperText={errors.id}
                //   onChange={handleChange}
                  value={form.id}
                  label="ID"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  error={!!errors.title}
                  helperText={errors.title}
                //   onChange={handleChange}
                  value={form.title}
                  label="Title"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  error={!!errors.price}
                  helperText={errors.price}
                //   onChange={handleChange}
                  value={form.price}
                  label="Price"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  error={!!errors.description}
                  helperText={errors.description}
                //   onChange={handleChange}
                  value={form.description}
                  label="Description"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            {/* <Button disabled={isFormInvalid()} type="submit" fullWidth>
              Add Item
            </Button> */}
            <Button type="submit" fullWidth>
              Add Item
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddItem;
