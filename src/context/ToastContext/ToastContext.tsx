import { createContext, useContext } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";

type ToastContextProps = {
  notify: (
    message: string,
    type?: "success" | "info" | "warning" | "error"
  ) => void;
};

const ToastContext = createContext<ToastContextProps>({ notify: () => {} });

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const notify = (
    message: string,
    type: "success" | "info" | "warning" | "error" = "success"
  ) => {
    const options: ToastOptions = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    };

    switch (type) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      case "info":
        toast.info(message, options);
        break;
      case "warning":
        toast.warning(message, options);
        break;
      default:
        toast(message, options); // Default case, jika tipe tidak sesuai.
    }
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(`ada galat pada toast`);
  }

  return context;
};
