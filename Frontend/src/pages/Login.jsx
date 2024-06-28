import { useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";
import { axiosInstance } from "../utils/axios";

function LoginPage() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handle = (e) => {
        e.preventDefault();
        axiosInstance.post("/auth/login", data).then((res) => {
            console.log(res);
            if(res.status == 200){
                alert("Logged In");
                localStorage.setItem("token", res.data.token);
            }
            setData({
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
                            <Label>Email</Label>
                            <Input
                            required 
                            type="email"
                            value = {data.email}
                            onChange={(e) => {
                                setData({...data, email: e.target.value});
                            }} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                            required 
                            type="password"
                            value = {data.password}
                            onChange={(e) => {
                                setData({...data, password: e.target.value});
                            }} 
                            />
                        </FormGroup>

                        <Button>Login</Button>

                    </Form>
                </CardBody>
            </Card>

        </div>
    )
}
export default LoginPage;