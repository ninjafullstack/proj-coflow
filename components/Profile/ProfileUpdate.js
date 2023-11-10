import { updateUser } from "@/actions/authActions";
import Form from "../Global/Form";
import Button from "../Global/Button";

const ProfileUpdate = ({ update }) => {
  async function handleUpdateProfile(formData) {
    const name = formData.get("name");
    const image = formData.get("image");
    
    if (update) {
      // when update() is run client side, the page will re-render
      // server side won't re-render
      update({ name, image });
    }
    
    const res = await updateUser({ name, image });
    if (res?.msg) alert(res?.msg);
  }
  
  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
      
      <Form action={handleUpdateProfile} style={{ margin: '20px 0' }}>
        <div className="mb-4">
          <label className="label" htmlFor="nameInput">
            <h6 className="label-text text-sm sm:text-base">Name</h6>
          </label>
          <input
            className="input input-bordered w-full bg-lightgray"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="label" htmlFor="imageInput">
            <h6 className="label-text text-sm sm:text-base">Image</h6>
          </label>
          <input
            className="input input-bordered w-full bg-lightgray"
            type="text"
            name="image"
            placeholder="Image"
            required
          />
        </div>
        
        <Button btnClass="w-full text-white font-semibold bg-primary hover:bg-primary-focus" value="Update Profile" />
      </Form>
    </div>
  );
}

export default ProfileUpdate;
