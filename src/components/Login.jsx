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

export function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1BBD7E" };
  const btnStyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align={"center"}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography marginTop={1} component="h2">
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
          <Link href="#" marginLeft={1} underline={"hover"}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
