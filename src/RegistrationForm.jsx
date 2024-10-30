import React, { useState } from 'react';
import { TextField, Button, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel, Select, MenuItem, InputLabel, Typography, Box } from '@mui/material';
import './App.css';

const RegistrationForm = () => {
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [fname, setFName] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [course, setCourse] = useState('');

    const handleFirstnameChange = (e) => setFName(e.target.value);
    const handleLastnameChange = (e) => setLname(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleDobChange = (e) => setDob(e.target.value);
    const handleCourseChange = (e) => setCourse(e.target.value);

    const validateForm = () => {
        if (!fname || !lname || !address || !phone || !gender || !email || !dob || !course) {
            setError("All fields are required");
            return false;
        }
        setError('');
        return true;
    };

    const handleRegister = () => {
        if (validateForm()) {
            const formData = { fname, lname, address, phone, email, gender, dob, course };
            console.log(formData);
            setSuccessMessage("Registration Successful!");
            handleCancel(); 
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    const handleCancel = () => {
        setFName('');
        setLname('');
        setAddress('');
        setPhone('');
        setEmail('');
        setGender('');
        setCourse('');
        setDob('');
        setError('');
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            padding={2}
        >
            <Box
                sx={{
                    backgroundColor: "aliceblue",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                    maxWidth: "500px",
                    width: "100%"
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Registration Form
                </Typography>

                <TextField
                    fullWidth
                    margin="normal"
                    label="First Name"
                    value={fname}
                    onChange={handleFirstnameChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Last Name"
                    value={lname}
                    onChange={handleLastnameChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Address"
                    multiline
                    rows={3}
                    value={address}
                    onChange={handleAddressChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Phone Number"
                    type="number"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="E-Mail"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />

                <FormControl component="fieldset" fullWidth margin="normal">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row value={gender} onChange={handleGenderChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    fullWidth
                    margin="normal"
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={dob}
                    onChange={handleDobChange}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Course</InputLabel>
                    <Select value={course} onChange={handleCourseChange}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Computer Science">Computer Science</MenuItem>
                        <MenuItem value="Electrical Electronics">Electrical Electronics</MenuItem>
                        <MenuItem value="Electronics Communication">Electronics Communication</MenuItem>
                        <MenuItem value="Civil">Civil</MenuItem>
                    </Select>
                </FormControl>

                {error && <Typography color="error" variant="body2">{error}</Typography>}
                {successMessage && <Typography color="primary" variant="body2">{successMessage}</Typography>}

                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
                    <Button variant="outlined" color="secondary" onClick={handleCancel}>Cancel</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default RegistrationForm;
