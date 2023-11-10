import { changePasswordWithCredentials } from "@/actions/authActions";
import Button from "../Global/Button";
import Form from "../Global/Form";

const ChangePassword = () => {
  async function handleChangePassword(formData) {
    const old_pass = formData.get('old_pass');
    const new_pass = formData.get('new_pass');
    
    const res = await changePasswordWithCredentials({ old_pass, new_pass });
    if (res?.msg) alert(res?.msg);
  }
  
  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      
      <Form action={handleChangePassword} style={{ margin: '20px 0' }}>
        <div className="mb-4">
          <label className="label" htmlFor="oldPassInput">
            <h6 className="label-text text-sm sm:text-base">Old Password</h6>
          </label>
          <input
            className="input input-bordered w-full bg-lightgray"
            type="password"
            name="old_pass"
            placeholder="Old Password"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="label" htmlFor="newPassInput">
            <h6 className="label-text text-sm sm:text-base">New Password</h6>
          </label>
          <input
            className="input input-bordered w-full bg-lightgray"
            type="password"
            name="new_pass"
            placeholder="New Password"
            required
          />
        </div>
        
        <Button btnClass="w-full text-white font-semibold bg-primary hover:bg-primary-focus" value="Change Password" />
      </Form>
    </div>
  );
};

export default ChangePassword;
