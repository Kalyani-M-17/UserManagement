import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    axiosInstance.get("/profile").then((res) => {
      if (res.status === 200) {
        setProfile(res.data);
      }
    });
  }, []);

  return (
    <div className="container mt-5">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          axiosInstance
            .put("/profile", {
              name: profile.name,
            })
            .then((res) => {
              if (res.status === 200) {
                alert("Updated");
              }
            })
            .catch((e) => {
              console.log(e);
              alert("Something went wrong");
            });
        }}
      >
        <FormGroup>
          <Label>Name</Label>
          <Input
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            value={profile.name}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input readOnly disabled value={profile.email}></Input>
        </FormGroup>
        <Button>Update</Button>
      </Form>
    </div>
  );
}

export default ProfilePage;
