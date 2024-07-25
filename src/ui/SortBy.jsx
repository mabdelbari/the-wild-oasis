import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearcParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || options.at(0).value;

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearcParams(searchParams);
  }

  return (
    <div>
      <Select
        options={options}
        type="white"
        value={sortBy}
        onChange={handleChange}
      />
    </div>
  );
}

export default SortBy;
