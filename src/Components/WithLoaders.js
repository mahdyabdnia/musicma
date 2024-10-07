// withLoader.js
import React, { useState, useEffect } from 'react';
import Loader from './Loader/Loader';

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <Loader /> : <WrappedComponent {...props} />;
  };
};

export default withLoader;