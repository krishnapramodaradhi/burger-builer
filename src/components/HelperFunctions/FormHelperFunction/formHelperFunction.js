const formHelperFunction = (
  elType,
  type,
  placeholder,
  value,
  minLength,
  maxLength
) => {
  return {
    elementType: elType,
    elementConfig: {
      type: type,
      placeholder: placeholder
    },
    value: value,
    validation: {
      required: true,
      minLength: minLength,
      maxLength: maxLength,
    },
    valid: false,
    touched: false
  };
};

export default formHelperFunction;
