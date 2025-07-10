import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Blog from "./component/Pages/Blog";
import NotFound from "./component/Pages/NotFound";
import Layout from "./component/Layouts/Layout";
import ScrollToTop from "./component/Layouts/ScrollToTop";
import RouteChangeLoader from "./component/Spinners/RouteChangeLoader";
import Login from "./component/User/Authentication/Login";
import Register from "./component/User/Authentication/Register";
import TicketPage from "./component/Ticket/TicketPage";
import TicketScanner from "./component/Ticket/TicketScanner";
import PaymentSuccess from "./component/Modals/TicketModal/PaymentSuccess";
import PaymentCancel from "./component/Modals/TicketModal/PaymentCancel";
import ProfilePage from "./component/User/Profile/ProfilePage";
import TicketCheckIn from "./component/Ticket/TicketCheckIn";
import ProtectedRoute from "./component/ProtectedRoute";
import Dashboard from "./component/Event/Dashboard";
import CreateEvent from "./component/Event/CreateEvent";
import MyEvents from "./component/Event/MyEvents";
import EventView from "./component/Event/EventView";
import EventDetails from "./component/Event/EventDetails";
import EventListLayout from "./component/Event/EventListLayout";
import CreateTicket from "./component/Ticket/CreateTicket";
import MyTickets from "./component/Ticket/MyTickets";
import Ticket from "./component/Modals/TicketModal/Ticket";
import PurchaseTicketModal from "./component/Modals/TicketModal/PurchaseTicketModal";
import Settings from "./component/User/Setting/Settings";
import ProfileUpdate from "./component/User/Setting/ProfileUpdate";
import UserLayout from "./component/Layouts/UserLayout";

function App() {
  return (
    <>
    <RouteChangeLoader />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/page-not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" replace />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserLayout>
                <Dashboard />
              </UserLayout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/scan-ticket"
          element={
            <ProtectedRoute>
              <UserLayout>
                <TicketScanner />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/ticket-page/:ticketId"
          element={
            <ProtectedRoute>
              <UserLayout>
                <TicketPage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/payment-success"
          element={
            <ProtectedRoute>
              <UserLayout>
                <PaymentSuccess />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkin/:ticketId"
          element={
            <ProtectedRoute>
              <UserLayout>
                <TicketCheckIn />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment-failed"
          element={
            <ProtectedRoute>
              <UserLayout>
                <PaymentCancel />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/ticket"
          element={
            <ProtectedRoute>
              <UserLayout>
                <Ticket />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/purchase-ticket"
          element={
            <ProtectedRoute>
              <UserLayout>
                <PurchaseTicketModal />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-event"
          element={
            <ProtectedRoute>
              <UserLayout>
                <CreateEvent />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-events"
          element={
            <ProtectedRoute>
              <UserLayout>
                <MyEvents />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-tickets"
          element={
            <ProtectedRoute>
              <UserLayout>
                <MyTickets />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-event/:eventId"
          element={
            <ProtectedRoute>
              <UserLayout>
                <EventView />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-ticket/:eventId"
          element={
            <ProtectedRoute>
              <UserLayout>
                <CreateTicket />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/event-details/:eventId"
          element={
            <ProtectedRoute>
              <UserLayout>
                <EventDetails />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/event-list"
          element={
            <ProtectedRoute>
              <UserLayout>
                <EventListLayout />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <UserLayout>
                <Settings />
              </UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings/profile-update"
          element={
            <ProtectedRoute>
              <UserLayout>
                <ProfileUpdate />
              </UserLayout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserLayout>
                <ProfilePage />
              </UserLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
