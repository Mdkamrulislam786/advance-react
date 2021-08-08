import React from "react";
import Form from "../../../Components/Form";
import Input from "../../../Components/Input";
import Select from "../../../Components/Select";

const HookForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input name="firstName" placeholder="First Name" type="text" />
      <Input name="lastName" placeholder="Last Name" type="text" />
      <Select name="sex" options={["female", "male"]} />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default HookForm;

/* 
1. create all type of form field
2. Do validation 
3. Basic form checks
*/
