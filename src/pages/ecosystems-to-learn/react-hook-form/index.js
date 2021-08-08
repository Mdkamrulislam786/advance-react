import React from "react";
import Button from "../../../Components/Button";
import Form from "../../../Components/Form";
import Input from "../../../Components/Input";
import Radio from "../../../Components/Radio/Radio";
import Select from "../../../Components/Select";
import {
  fileValidSchema,
  numberValidationSchema,
  required,
} from "../../../Utils/formValidations";

const ReactHookForm = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 4));
  };

  return (
    <Form onSubmit={onSubmit} className="formWrapper">
      <Input
        name="firstName"
        placeholder="First Name"
        type="text"
        validations={required}
      />
      <Input name="lastName" placeholder="Last Name" type="text" />
      <Input name="file" type="file" validations={fileValidSchema} />
      <Input
        name="number"
        placeholder="Phone number"
        type="number"
        validations={numberValidationSchema}
      />
      <Select name="gender" options={["female", "male"]} />
      <Radio name="remember" label="Rememeber Me" type="checkbox" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ReactHookForm;
