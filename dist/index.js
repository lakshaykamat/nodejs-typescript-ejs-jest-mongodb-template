import Express from "express";
import exampleRoute from "./routes/exampleRoute.js";
const app = Express();
const PORT = 8080;
app.use('/', exampleRoute);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, () => console.log("Server is listening on port 8080"));
//# sourceMappingURL=index.js.map