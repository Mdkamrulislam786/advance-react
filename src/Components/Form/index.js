import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ defaultValues, children, onSubmit, ...rest }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ defaultValues });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({});
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form {...rest} onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    errors,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default Form;
