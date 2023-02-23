import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

type SignupFormInputs = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormInputs>({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.username) {
      setErrors((prevState) => ({ ...prevState, username: 'This field is required' }));
    }
    if (!formData.password) {
      setErrors((prevState) => ({ ...prevState, password: 'This field is required' }));
    }
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: 'Passwords must match',
      }));
    }
    console.log(formData);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="input-container">
        <FaUser className="icon" />
        <input
        className='input'
          type="text"
          name="username"
          placeholder="Email or Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <span className="error-message">{errors.username}</span>}
      </div>
      <div className="input-container">
        <FaLock className="icon" />
        <input
        className='input'
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span className="error-message">{errors.password}</span>}
      </div>
      <div className="input-container">
        <FaLock className="icon" />
        <input
           className='input'
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <span className="error-message">{errors.confirmPassword}</span>
        )}
      </div>
      <button className="button" type="submit">Sign up</button>
    </form>
  );
};
