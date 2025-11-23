import express from "express";
import helloRoute from "./routes/hello";
import timeRoute from "./routes/time";
import usersRoute from "./routes/users";
import addRoute from "./routes/add";
import welcomeRoute from "./routes/welcome";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(addRoute);
app.use("/", welcomeRoute);



app.use(helloRoute);
app.use(timeRoute);
app.use(usersRoute);
app.use(addRoute);

export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
