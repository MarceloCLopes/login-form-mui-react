import { useState } from "react";
import { Paper, Tab, Tabs, Typography, Box } from "@mui/material";

import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";

export function SignInOutContainer() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: 340, margin: "20px auto" };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={20} style={paperStyle}>
      <Tabs
        value={value}
        variant={"fullWidth"}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <SignUp />
      </TabPanel>
    </Paper>
  );
}
