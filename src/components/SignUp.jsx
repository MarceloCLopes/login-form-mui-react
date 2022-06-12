import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export function SignUp() {
  const paperStyle = {
    width: 300,
    padding: 20,
    height: "73vh",
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1BBD7E" };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Stack spacing={1} alignItems={"center"}>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <Typography component={"h1"} variant={"h5"}>
            Sign Up
          </Typography>
          <Typography variant={"caption"}>
            Please fill this form to create an account
          </Typography>
        </Stack>

        <Stack marginTop={2} spacing={1}>
          <TextField fullWidth label="Name" />
          <TextField fullWidth label="Email" type={"email"} />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                value="female"
                label="Female"
                control={<Radio />}
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Phone" type={"number"} />
          <TextField fullWidth label="Password" type={"password"} />
          <TextField fullWidth type={"password"} label="Confirm Password" />
          <FormControlLabel
            label="I accept the terms and conditions."
            control={<Checkbox size="medium" color={"primary"} />}
          />

          <Button
            fullWidth
            type="submit"
            color={"primary"}
            variant={"contained"}
          >
            Sign in
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
}
