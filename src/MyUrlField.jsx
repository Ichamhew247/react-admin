import { useRecordContext } from "react-admin";
import { MdLaunch } from "react-icons/md";

const MyUrlField = ({ source }) => {
  const record = useRecordContext();
  return (
    <a href={record && record[source]}>
      {record && record[source]}
      <MdLaunch />
    </a>
  );
};

export default MyUrlField;
