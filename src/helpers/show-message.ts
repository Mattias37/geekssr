import {
  toast,
  TypeOptions,
  ToastPosition,
  Zoom,
  ToastContent,
  ToastOptions, 
} from 'react-toastify';

interface Props {
  id: string;
  message: ToastContent;
  position?: string;
  type?: string;
  autoClose?: number;
  className?: string;
  transition?: boolean;
  pauseOnFocusLoss?: boolean;
}

export const showToast = (props: Props) => {
  let autoClose: number | undefined = 2000;
  if (
    (typeof props.autoClose === 'boolean' && !props.autoClose) ||
    typeof props.autoClose === 'number'
  ) {
    autoClose = props.autoClose;
  }
  const options: ToastOptions = {
    autoClose,
    type: (props.type as TypeOptions) || 'default',
    position: (props.position as ToastPosition) || 'bottom-left',
    toastId: props.id,
    className: props.className || undefined,
    transition: props.transition ? Zoom : undefined,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    pauseOnFocusLoss: false,
  };
  if (toast.isActive(props.id)) {
    return toast.update(props.id, {...options, render: props.message});
  }
  return toast(props.message, options);
};
