import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProvider from "./context/userContext";
import Cart from "./pages/cart/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navbar />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "signin",
				element: <Login />,
			},
			{
				path: "signup",
				element: <Register />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<Provider store={store}>
				<UserProvider>
					<RouterProvider router={router} />
				</UserProvider>
			</Provider>
		</>
	);
}

export default App;
