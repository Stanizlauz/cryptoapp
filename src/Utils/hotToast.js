import toast from "react-hot-toast";

export const notify = (message) => toast(message);

export const successMessage = (message) => toast.success(message);

export const errorMessage = (message) => toast.error(message);