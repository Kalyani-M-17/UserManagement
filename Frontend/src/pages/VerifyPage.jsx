import { useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";
import { axiosInstance } from "../utils/axios";

function VerifyPage() {
    const [otp, setOtp] = useState("");
    const handle = (e) => {
        e.preventDefault();
        axiosInstance.post("/auth/verify_otp", {otp}).then((res) => {
            if (res.status === 200) {
                localStorage.setItem("email_verified", new Date());
                alert("Verified");
                window.location.replace("/");
            } else {
                alert("Incorrect OTP");
            }
        });
    };

    return (
        <div className="mt-5 container">
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">Verify OTP</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handle}>
                        <FormGroup>
                            <Label>OTP</Label>
                            <Input 
                                required
                                type="text"
                                value={otp}
                                onChange={(e) => {
                                    setOtp(e.target.value);
                                }}
                            />
                        </FormGroup>

                        <Button>Verify</Button>
                    </Form>
                </CardBody>
            </Card>

        </div>
    );
}

export default VerifyPage;