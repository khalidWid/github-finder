import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { BiErrorCircle } from "react-icons/bi";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex item-start mb-4 space-x-2">
        {alert.type === "error" && (
          <BiErrorCircle className="w-6 h-6 flex-none text-red-400 mt-0.5" />
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
