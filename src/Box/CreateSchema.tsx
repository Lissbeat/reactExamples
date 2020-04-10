import * as yup from "yup";

export const CreateSchema = yup.object().shape({
    boxName: yup
      .string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });