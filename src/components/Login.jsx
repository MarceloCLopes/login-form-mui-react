import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export function Login({ handleChange }) {
  const paperStyle = {
    width: 300,
    padding: 20,
    height: "73vh",
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1BBD7E" };
  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align={"center"}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography marginTop={1} component="h1" variant="h5">
            Sign In
          </Typography>
        </Grid>

        <Stack marginTop={4} spacing={2}>
          <TextField
            required
            fullWidth
            label="Username"
            placeholder="Enter Username"
          />
          <TextField
            required
            fullWidth
            label="Password"
            type={"password"}
            placeholder="Enter Password"
          />
        </Stack>

        <FormControlLabel
          label="Remember me"
          control={<Checkbox size="small" color={"primary"} />}
        />

        <Button
          fullWidth
          type="submit"
          style={btnStyle}
          color={"primary"}
          variant={"contained"}
        >
          Sign in
        </Button>

        <Typography>
          <Link href="#" underline={"hover"}>
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link
            href="#"
            marginLeft={1}
            underline={"hover"}
            onClick={() => handleChange("event", 1)}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
