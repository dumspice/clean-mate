import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MultiStepForm.module.scss";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

const cx = classNames.bind(styles);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    workers: 1,
    hours: 3,
    useOwnTools: true,
    useVacuum: false,
    extraServices: { ironing: true, laundry: true },
    addOnProducts: [], // To store selected add-on products
    notes: "",
    day: "",
    date: "H.Nay",
    time: "08:00 - 10:00",
    discountOnDay: 0,
    indicator: "",
    paymentMethod: "",
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleDateChange = (date, day, discount, indicator) => {
    setFormData({ ...formData, date, day, discountOnDay: discount, indicator });
  };

  const handleExtraServiceChange = (service) => {
    setFormData({
      ...formData,
      extraServices: {
        ...formData.extraServices,
        [service]: !formData.extraServices[service],
      },
    });
  };

  const handleAddOnProduct = (product) => {
    const updatedProducts = formData.addOnProducts.includes(product)
      ? formData.addOnProducts.filter((p) => p !== product)
      : [...formData.addOnProducts, product];
    setFormData({ ...formData, addOnProducts: updatedProducts });
  };

  const calculateTotal = () => {
    let basePrice = formData.workers === 1 ? 254000 : 508000; // Base price for 1 or 2 workers
    if (formData.hours === 3)
      basePrice = formData.workers === 1 ? 314000 : 628000; // 3 hours
    if (formData.hours === 3.5)
      basePrice = formData.workers === 1 ? 344000 : 688000; // 3.5 hours
    if (formData.extraServices.ironing) basePrice += 50000;
    if (formData.extraServices.cooking) basePrice += 50000;

    // Add prices for add-on products
    let addOnTotal = 0;
    formData.addOnProducts.forEach((product) => {
      if (product === "SET 5 BÌNH 19L - Nước khoáng ion") addOnTotal += 390000;
      if (product === "SET 5 THÙNG 24 CHAI 486ML - Nước khoáng iZUMI")
        addOnTotal += 816000;
      if (product === "Nước khoáng iZUMI") addOnTotal += 15000;
    });

    let basePriceAfterDiscount = basePrice;
    if (formData.discountOnDay) {
      if (formData.indicator === "up") {
        basePriceAfterDiscount =
          basePrice + (basePrice * formData.discountOnDay) / 100;
      } else if (formData.indicator === "down") {
        basePriceAfterDiscount =
          basePrice - (basePrice * formData.discountOnDay) / 100;
      }
    }

    return basePriceAfterDiscount + addOnTotal;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            calculateTotal={calculateTotal}
            handleChange={handleChange}
            handleAddOnProduct={handleAddOnProduct}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleDateChange={handleDateChange}
            calculateTotal={calculateTotal}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            calculateTotal={calculateTotal}
            handleExtraServiceChange={handleExtraServiceChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      //   case 4:
      //     return (
      //       <Step4
      //         formData={formData}
      //         handleChange={handleChange}
      //         handleNext={handleNext}
      //         handleBack={handleBack}
      //       />
      //     );
      //   case 5:
      //     return (
      //       <Step5
      //         formData={formData}
      //         calculateTotal={calculateTotal}
      //         handleNext={handleNext}
      //         handleBack={handleBack}
      //       />
      //     );
      //   case 6:
      //     return (
      //       <Step6
      //         formData={formData}
      //         handleChange={handleChange}
      //         calculateTotal={calculateTotal}
      //         handleBack={handleBack}
      //       />
      //     );
      default:
        return null;
    }
  };

  return <div className={cx("multi-step-form")}>{renderStep()}</div>;
};

export default MultiStepForm;
