export const numberValidationSchema = {
  required: "This input is required.",
  pattern: {
    value: /\d+/,
    message: "This input is number only.",
  },
  minLength: {
    value: 11,
    message: "This input must exceed 10 characters",
  },
};

export const required = { required: "This input is required." };

export const fileValidSchema = {
  validate: {
    lessThan2MB: (files) => files[0]?.size < 200000 || "Max 2MB",
    acceptedFormats: (files) =>
      ["image/jpeg", "image/png", "image/gif"].includes(files[0]?.type) ||
      "Only PNG, JPEG e GIF",
  },
};
