import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { axiosInstance } from "../utils/axios";

function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handle = (e) => {
    e.preventDefault();
    axiosInstance.post("/auth/register", data).then((res) => {
      console.log(res);
      alert("registered");
      setData({
        name: "",
        email: "",
        password: "",
      });
    });
  };

  return (
    <div className="container m-5">
      <Card>
        <CardHeader>
          <CardTitle tag="h5">Register</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handle}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                required
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                required
                type="email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                title="Need proper email id"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                required
                type="password"
                value={data.password}
                pattern=".{8,}"
                title="Eight or more characters"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </FormGroup>

            <Button>Register</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
export default RegisterPage;
