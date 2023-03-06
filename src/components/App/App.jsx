// import ContactForm from '../ContactForm';
// import ContactList from '../ContactList';
// import Filter from '../Filter';
// import { ContactsTitle, Container } from './App.styled';
// import useInput from '../Hooks/useInput';
// import { useSelector } from 'react-redux';
// import { getFilterValue } from 'redux/filterSlice';
// import { useGetContactsQuery } from 'redux/contactsApi';
// import { ThreeDots } from 'react-loader-spinner';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'Hooks/useAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// PAGES
import { Home } from 'pages/Home/Home';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      )}
      <ToastContainer />
    </>
  );
};

export default App;
