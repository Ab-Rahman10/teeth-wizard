import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Layouts/Home";
import AllTreatments from "../Layouts/AllTreatments";
import MyAppointments from "../Layouts/MyAppointments";
import Profile from "../Layouts/Profile";
import Details from "../Components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const servicesRes = await fetch("/services.json");
          const serviceData = await servicesRes.json();

          const feedbackRes = await fetch("/happyClients.json");
          const feedbackData = await feedbackRes.json();

          return { feedbackData, serviceData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const detailsRes = await fetch("/services.json");
          const detailsData = await detailsRes.json();

          const singleDetailsData = detailsData.find(
            (detail) => detail.id == params.id
          );
          return singleDetailsData;
        },
      },
    ],
  },
]);

export default router;
