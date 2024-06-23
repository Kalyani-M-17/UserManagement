import {Button, Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";

function HomePage() {
    return (
    <div className="container m-5">
        <Card>
            <CardHeader>
                <CardTitle tag="h5">Register</CardTitle>
            </CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" />
                    </FormGroup>

                    <Button>Register</Button>
                </Form>
            </CardBody>
        </Card>
        </div>
        );
}

export default HomePage;