import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
function App() {
	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/addUser" element={<AddUser />} />
					<Route exact path="/editUser/:id" element={<EditUser />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
