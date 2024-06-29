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

function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handle = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/auth/login", data)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert("Logged In");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email_verified", res.data.email_verified);

          if (res.data.email_verified == null) {
            window.location.replace("/verify");
          } else {
            window.location.replace("/");
          }
        }
        setData({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert("Invalid credentials");
        }
      });
  };

  return (
    <div className="container m-5">
      <Card>
        <CardHeader>
          <CardTitle tag="h5">Login</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handle}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                required
                type="email"
                value={data.email}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                title="Need proper email id"
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
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </FormGroup>

            <Button>Login</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
export default LoginPage;
