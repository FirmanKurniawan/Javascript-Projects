import withReactContent from "sweetalert2-react-content";
import Swal, { SweetAlertResult, SweetAlertIcon } from "sweetalert2";

interface swalProps {
  success(
    title?: string | undefined,
    text?: string | undefined
  ): Promise<SweetAlertResult<any>>;
  error(
    title?: string | undefined,
    text?: string | undefined
  ): Promise<SweetAlertResult<any>>;
  custom(
    title?: string | undefined,
    text?: string | undefined,
    icon?: SweetAlertIcon,
    showCancelButton?: boolean | undefined,
    confirmButtonText?: string | undefined,
    cancelButtonText?: string | undefined,
    reverseButtons?: boolean | undefined
  ): Promise<SweetAlertResult<any>>;
}

const mySwal = withReactContent(Swal);

const customSwal = mySwal.mixin({
  customClass: {
    confirmButton: "btn btn-primary ml-2",
    cancelButton: "btn btn-info mr-2",
  },
  buttonsStyling: true,
});

const swal: swalProps = {
  success: (title?: string | undefined, text?: string | undefined) => {
    return customSwal.fire({
      title,
      text,
      icon: "success",
    });
  },
  error: (title: string, text: string) => {
    return customSwal.fire({
      title,
      text,
      icon: "error",
    });
  },
  custom: (
    title: string,
    text: string,
    icon: SweetAlertIcon,
    showCancelButton?: boolean,
    confirmButtonText?: string,
    cancelButtonText?: string,
    reverseButtons?: boolean
  ) => {
    return customSwal.fire({
      title,
      text,
      icon,
      showCancelButton,
      confirmButtonText,
      cancelButtonText,
      reverseButtons,
    });
  },
};

export default swal;
