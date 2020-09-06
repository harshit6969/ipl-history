import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';

import Loader from "./Components/Loader";

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) return <Loader />;
  return (
    <Grid container>
    </Grid>
  );
}

export default App;
