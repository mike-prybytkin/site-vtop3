import formCalculatorValidate from './form-calculator-validate';
import selectSiteType from './select-site-type';
import selectRegion from './select-region';
import resetForm from './reset-form';

const initFormCalculator = () => {
  formCalculatorValidate();
  selectSiteType();
  selectRegion();
  resetForm();
};

export default initFormCalculator;
