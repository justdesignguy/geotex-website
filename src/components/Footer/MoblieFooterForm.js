import React, { useState } from 'react';
import {
  FormControl,
  Button,
  Text,
  Input,
  FormHelperText,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { IoArrowForward } from 'react-icons/io5';
import { hostURL } from 'components/common/constant';

const MoblieFooterForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [nameHelperText, setNameHelperText] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  const [phoneHelperText, setPhoneHelperText] = useState('');
  const [messageHelperText, setMessageHelperText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [showToast, setShowToast] = useState(false);
  const [ToastText, setToastText] = useState('');

  const sendFormData = async () => {
    setIsLoading(true);
    const contactFormData = values;
    setIsLoading(false);
    // setShowToast(true);
    setToastText(
      'Your details have been received successfully, our team will contact you soon!!'
    );
    setValues({
      name: '',
      message: '',
      phone: '',
      email: '',
    });
    setTimeout(() => {
      setToastText('');
    }, 5000);
    try {
      const params = {
        method: 'POST',
        body: JSON.stringify(contactFormData),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const url = `${hostURL}/sendmail`;

      const sendData = await fetch(url, params);
      const result = await sendData.json();
      console.log(result);
      // if (result.status === 200) {
      //   console.log('RESULT STATUS', isLoading, values);
      //   setIsLoading(false);
      //   // setShowToast(true);
      //   setToastText('Thank you for contacting us');
      //   setValues({
      //     name: '',
      //     message: '',
      //     phone: '',
      //     email: '',
      //   });
      //   // setShowToast(false);
      //   setTimeout(() => {
      //     setToastText('');
      //   }, 5000);
      // }
    } catch (err) {
      console.log(err);
      setValues({
        name: '',
        message: '',
        phone: '',
        email: '',
      });
      setToastText('Something went wrong');
      setIsLoading(false);
      setTimeout(() => {
        setToastText('');
      }, 5000);
      throw new Error(err);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log('render');
  const formValidator = () => {
    const helperText = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    // validate form datas
    if (values.name === '' || values.name === undefined) {
      helperText.name = 'Name is required';
      setNameHelperText('Name is required ');
    } else {
      setNameHelperText('');
    }

    let reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (values.email === '') {
      helperText.email = 'Email is required';
      setEmailHelperText('Email is required');
    } else if (reg.test(values.email) === false) {
      helperText.email = 'Please enter valid email  address';
      setEmailHelperText('Please enter valid email  address');
    } else {
      setEmailHelperText('');
    }

    if (values.phone === '') {
      helperText.phone = 'Phone is required';
      setPhoneHelperText('Phone is required');
    } else if (values.phone.length !== 10) {
      helperText.phone = 'Please enter valid phone number';
      setPhoneHelperText('Please enter valid phone number');
    } else {
      setPhoneHelperText('');
    }
    if (values.message === '') {
      helperText.message = 'Message is required';
      setMessageHelperText('Message is required');
    } else {
      setMessageHelperText('');
    }
    return helperText;
  };

  const onFormSubmit = (e) => {
    // e.preventDefault();
    const error = formValidator();
    if (
      error.name === '' &&
      error.message === '' &&
      error.phone === '' &&
      error.email === ''
    ) {
      sendFormData();
      console.log('send form data called');
    }
  };

  return (
    <FormControl
      p={4}
      w='300px'
      h={ToastText ? '550px' : '470px'}
      bg='white'
      ml='auto'
      mr='auto'
      borderRadius='16px'
      boxShadow='2xl'
      fontFamily='Montserrat'
    >
      {ToastText !== '' && (
        <Alert
          status={ToastText === 'Something went wrong' ? 'error' : 'success'}
          variant='subtle'
          fontSize='14px'
          textAlign='justify'
        >
          <AlertIcon />
          {ToastText}
          {/* Your details have been received successfully, our team will contact you soon!! */}
        </Alert>
      )}
      <Text
        fontWeight={400}
        fontSize='23px'
        lineHeight='24px'
        mb={4}
        mt={4}
        color='black'
      >
        Contact Form
      </Text>
      <Input
        id='name'
        name='name'
        variant='flushed'
        focusBorderColor='black'
        placeholder='Name'
        mb={nameHelperText ? 0 : 4}
        mt={4}
        value={values.name}
        onChange={onChange}
        type='text'
      />
      {nameHelperText && (
        <FormHelperText color='red'>{nameHelperText}</FormHelperText>
      )}

      <Input
        id='email'
        name='email'
        variant='flushed'
        placeholder='E-mail'
        focusBorderColor='black'
        mb={emailHelperText ? 0 : 4}
        mt={4}
        value={values.email}
        onChange={onChange}
      />
      {emailHelperText && (
        <FormHelperText color='red'>{emailHelperText}</FormHelperText>
      )}
      <Input
        id='phone'
        name='phone'
        variant='flushed'
        placeholder='Phone'
        value={values.phone}
        focusBorderColor='black'
        mb={phoneHelperText ? 0 : 4}
        mt={4}
        onChange={onChange}
        type='number'
      />
      {phoneHelperText && (
        <FormHelperText color='red'>{phoneHelperText}</FormHelperText>
      )}
      <Input
        id='message'
        name='message'
        value={values.message}
        variant='flushed'
        placeholder='Message'
        focusBorderColor='black'
        mb={messageHelperText ? 0 : 4}
        mt={4}
        onChange={onChange}
      />
      {messageHelperText && (
        <FormHelperText color='red'>{messageHelperText}</FormHelperText>
      )}
      <center>
        <Button
          float='right'
          bg='#033719'
          style={{ backgroundColor: '#033719' }}
          color='white'
          mt={4}
          fontWeight={400}
          rightIcon={<IoArrowForward />}
          type='submit'
          onClick={onFormSubmit}
          isLoading={isLoading}
        >
          Send Message
        </Button>
      </center>
    </FormControl>
  );
};

export default MoblieFooterForm;
